import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Config } from '../../domain/models/config.model';
import { Action } from '../../domain/models/action.model';
import { BusEvent } from '../../domain/models/bus-event.model';

@Injectable()
export class EventBusService {
  // Subject que emite los eventos que se despachan.
  private readonly _events$ = new Subject<BusEvent>();

  // Subject que emite las acciones que se deben ejecutar en respuesta a un evento.
  private readonly _actions$ = new Subject<Action>();

  // Subject utilizado para manejar la destrucción del servicio y la limpieza de recursos.
  private readonly _destroy$ = new Subject<void>();

  // Arreglo que almacena las configuraciones de eventos y acciones.
  private _configs: Config[] = [];

  // Observable que emite los eventos que se despachan.
  public get actions$(): Observable<Action> {
    return this._actions$.asObservable();
  }

  // Inicializa el servicio, comenzando a escuchar eventos.
  public init(): void {
    this._events$
      .pipe(takeUntil(this._destroy$))
      .subscribe((event: BusEvent) => {
        const config: Config | undefined = this.findConfig(event);

        if (config) {
          this.invokeAction(config, event);
        }
      });
  }

  // Añade una nueva configuración para manejar los eventos y sus acciones.
  public addConfig(config: Config): void {
    this._configs.push(config);
  }

  // Despacha un evento al bus, que lo manejará según las configuraciones.
  public dispatchEvent(event: BusEvent): void {
    this._events$.next(event);
  }

  // Método para limpiar recursos cuando se destruye el servicio.
  public onDestroy(): void {
    this._destroy$.next();
  }

  // Encuentra la configuración adecuada para un evento específico.
  private findConfig({ source, name }: BusEvent): Config | undefined {
    return this._configs.find(
      (config: Config) =>
        `${source}|${name}` === `${config.source}|${config.eventName}`
    );
  }

  // Ejecuta las acciones configuradas en respuesta a un evento.
  private invokeAction({ actions }: Config, { payload }: BusEvent) {
    actions.forEach((action: Action) =>
      this._actions$.next({ ...action, eventPayload: payload })
    );
  }
}

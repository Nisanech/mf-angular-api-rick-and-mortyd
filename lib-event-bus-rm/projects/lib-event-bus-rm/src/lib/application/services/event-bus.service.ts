import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IEventBus, IConfig } from '../../domain/models';


@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private eventSubject = new BehaviorSubject<IEventBus | null>(null);

  private config: IConfig[] = []

  emit(event: IEventBus) {
    this.eventSubject.next(event);

    this.executeActions(event);
  }

  on(eventName: string, callback: (event: IEventBus ) => void): void {
    this.eventSubject.asObservable().subscribe(event => {
      if (event && event.name === eventName) {
        callback(event);
      }
    })
  }

  registerConfig(config: IConfig) {
    this.config.push(config);
  }

  private executeActions(event: IEventBus) {
    const eventConfig = this.config.filter(c => c.eventName === event.name && c.source === event.source);

    eventConfig.forEach(config => {
      config.actions.forEach(action => {
        if (action.eventPayload) {
          action.eventPayload = event.payload;
        }
        console.log(`Executing action: ${action.name} with payload:`, action.payload);
      })
    });
  }
}

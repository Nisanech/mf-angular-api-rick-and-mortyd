/**
 * Módulo de Angular que proporciona el servicio `EventBusService` como una dependencia
 * inyectable.
 * `EVENT_BUS` es un token que permite inyectar una instancia de `EventBusService`.
 * */

import { NgModule } from '@angular/core';
import { EVENT_BUS } from '../providers/event-bus.token';
import { EventBusService } from '../../application/services/event-bus.service';

@NgModule({
  providers: [
    { provide: EVENT_BUS, useExisting: EventBusService },
    EventBusService,
  ],
})
export class EventBusModule {}

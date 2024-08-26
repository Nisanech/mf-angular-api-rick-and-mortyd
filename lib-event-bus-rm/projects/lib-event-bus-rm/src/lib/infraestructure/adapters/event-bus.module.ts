/**
 * Módulo de Angular que proporciona el servicio `EventBusService` como una dependencia
 * inyectable.
 * `EVENT_BUS` es un token que permite inyectar una instancia de `EventBusService`.
 * */

import { NgModule } from '@angular/core';
import { EventBusService } from '../../application/services/event-bus.service';

@NgModule({
  providers: [
    EventBusService,
  ],
})
export class EventBusModule {}

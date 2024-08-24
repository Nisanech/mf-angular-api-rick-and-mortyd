/*
 * Public API Surface of lib-event-bus-rm
 */

export * from './lib/lib-event-bus-rm.service';
export * from './lib/lib-event-bus-rm.component';
export * from './lib/lib-event-bus-rm.module';
export { EventBusService } from './lib/application/services/event-bus.service';
export { EVENT_BUS } from './lib/infraestructure/providers/event-bus.token';
export { EventBusModule } from './lib/infraestructure/adapters/event-bus.module';
export { Config } from './lib/domain/models/config.model';
export { Action } from './lib/domain/models/action.model';
export { BusEvent } from './lib/domain/models/bus-event.model';

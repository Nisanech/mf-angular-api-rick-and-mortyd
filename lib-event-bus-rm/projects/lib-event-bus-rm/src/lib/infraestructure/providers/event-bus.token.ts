/**
 * Este archivo define un `InjectionToken` llamado `EVENT_BUS` para inyectar el servicio
 * `EventBusService` en cualquier parte de la aplicación de Angular.
 * */

import { InjectionToken } from '@angular/core';
import { EventBusService } from '../../application/services/event-bus.service';

export const EVENT_BUS = new InjectionToken<EventBusService>('EventBusService');

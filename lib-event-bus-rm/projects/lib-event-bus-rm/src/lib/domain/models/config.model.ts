/**
 * Este archivo define la interfaz que mapea un evento con sus acciones correspondientes
 * en una fuente específica.
 * `source`: la fuente que emite el evento.
 * `actions`: lista de acciones que se ejecutarán cuando ocurra el evento.
 * `eventName`: el nombre del evento que desencadena estas acciones.
 * */

import { Action } from './action.model';

export interface Config {
  source: string;
  actions: Action[];
  eventName: string;
}

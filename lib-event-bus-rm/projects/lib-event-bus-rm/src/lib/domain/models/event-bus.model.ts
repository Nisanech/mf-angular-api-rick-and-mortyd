/**
 * Este archivo define la interfaz que representa un evento dentro del Event Bus.
 * `name`: el nombre del evento.
 * `source`: la fuente que emite el evento.
 * `payload`: los datos que acompañan al evento.
 * */
export interface IEventBus {
  name: string;
  source: string;
  payload: any;
}

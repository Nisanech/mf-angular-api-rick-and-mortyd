/**
 * Este archivo define la interfaz que representa una acción que se puede realizar
 * en respuesta a un evento.
 * `name`: el nombre de la acción.
 * `payload`: los datos que se enviarán cuando se ejecute la acción.
 * `eventPayload`: opcional, para capturar los datos específicos del evento que desencadena
 *  la acción.
 * */
export interface Action {
  name: string;
  payload: any;
  eventPayload?: any;
}

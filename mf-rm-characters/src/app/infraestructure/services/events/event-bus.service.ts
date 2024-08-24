import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ICharacterPaginationEvent } from '../../../domain/interfaces/events/character-pagination-event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private characterPaginationSubject = new Subject<ICharacterPaginationEvent>();

  characterPagination$ = this.characterPaginationSubject.asObservable();

  emitCharacterPaginationEvent(event: ICharacterPaginationEvent) {
    this.characterPaginationSubject.next(event);
  }
}
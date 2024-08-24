import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { EventBusService } from 'src/app/infraestructure/services/events/event-bus.service';
import { ICharacterPaginationEvent } from 'src/app/domain/interfaces/events/character-pagination-event.interface';
EventBusService

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

@Component({
  selector: 'app-character-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './character-table.component.html',
  styleUrls: ['./character-table.component.scss']
})
export class CharacterTableComponent  {
  characters: Character[] = [];
  subscription!: Subscription;

  constructor(private http: HttpClient, private eventBus: EventBusService) {}

  // ngOnInit(): void {
  //   this.subscription = loadCharacters$.subscribe(() => {
  //     this.loadData();
  //   });
  // }

  ngOnInit(): void {
    this.eventBus.characterPagination$.subscribe((event: ICharacterPaginationEvent) => {
      console.log(event);
      
      this.loadData(event.pageNumber)
    })
  }

  loadData(pageNumber: number): void {
    console.log(pageNumber);
    
    this.http.get<any>(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .subscribe(response => {
        this.characters = response.results;
      });
  }
}

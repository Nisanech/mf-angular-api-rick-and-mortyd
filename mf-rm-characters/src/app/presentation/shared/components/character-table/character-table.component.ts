import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { EventBusService, IEventBus } from 'lib-event-bus-rm';
import { fromEvent } from 'rxjs';

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
  @Input() data: any;
  characters: Character[] = [];

  constructor(private eventBus: EventBusService, private http: HttpClient) {}

  ngOnInit() {
    // Escuchar el evento emitido por la aplicación host
    this.eventBus.on('componentLoaded', (event: IEventBus) => {
      this.updateTable(event.payload.page || 1);
    });
  }

  updateTable(page: number = 1) {
    console.log(`Table updated for page: ${page}`);
    
    this.http.get<any>(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .subscribe(response => {
        this.characters = response.results;
        console.log('Characters:', this.characters);
      });
  }
}

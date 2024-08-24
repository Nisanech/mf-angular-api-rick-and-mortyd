import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './components/character/character.component';
import { loadRemoteModule } from '@angular-architects/module-federation';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CharacterComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('characterContainer', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  private eventBus: any;

  async ngOnInit(): Promise<void> {
    try {
      // Cargar el EventBusService desde la aplicación remota
      
    } catch (error) {
      console.error('Error loading remote module:', error);
    }
  }
  

  async loadCharacterTable(pageNumber: number): Promise<void> {
    console.log('loadCharacterTable', pageNumber);
    
    try {
      console.log('entre aquí');
      
      const m = await loadRemoteModule({
        remoteName: 'mfe1',
        exposedModule: './EventBusService',
      });
      console.log(m);

      if (!m.EventBusService) {
        console.error('EventBusService is undefined');
        return;
      }

      // Asignar la instancia del EventBusService a la variable eventBus
      this.eventBus = new m.EventBusService();
      console.log(this.eventBus);
      // const m = await loadRemoteModule({
      //   remoteName: 'mfe1',
      //   exposedModule: './CharacterTableComponent',
      // });
  
      // const ref = this.viewContainer.createComponent(m.CharacterTableComponent);
      
      // if (this.eventBus) {
      //   // Emitir el evento con el número de página
      //   this.eventBus.emitCharacterPaginationEvent({ pageNumber });
      // } else {
      //   console.error('EventBusService is not loaded');
      // }
      
    } catch (error) {
      console.error('Error loading character table component:', error);
    }
    
  }

  // loadCharacters() {
  //   this.characterComponent.loadCharacters();
    
  // }

  // constructor(private eventBusService: EventBusService) {}

  // loadCharacters(pageNumber: number): void {
  //   this.eventBusService.emitCharacterPaginationEvent({ pageNumber });
  // }



}

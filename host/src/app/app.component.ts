import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';

import { EventBusService, IAction, IConfig } from 'lib-event-bus-rm'

interface CharacterTableComponent {
  loadData(): void;
  data: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('characterContainer', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  constructor(private eventBus: EventBusService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.eventBus);
    
  }

  async ngAfterViewInit() {
    const actions: IAction[] = [
      {
        name: 'LoadCharacters',
        payload: { page: 1 }
      },
      {
        name: 'LogEvent',
        payload: 'Event triggered'
      }
    ];

    const config: IConfig = {
      source: 'app.host',
      actions,
      eventName: 'componentLoaded'
    };

    this.eventBus.registerConfig(config);


    console.log(this.viewContainer);

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './CharacterTableComponent'
    });

    console.log(m);
    
    const ref = this.viewContainer.createComponent(m.CharacterTableComponent);
    
    console.log(ref);

    // Emitir evento indicando que el componente se ha cargado
    this.eventBus.emit({
      name: 'componentLoaded',
      source: 'app.host',
      payload: { page: 2 }
    });
  }
}

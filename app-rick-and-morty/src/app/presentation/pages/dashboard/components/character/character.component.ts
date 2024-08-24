import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

interface CharacterTableComponent {
  loadData(): void;
}

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @ViewChild('characterRemote', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  async loadCharacters(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './CharacterTableComponent'
    });

    const ref = this.viewContainer.createComponent(m.CharacterTableComponent);
    console.log(ref.instance);
    
    const instance = ref.instance as CharacterTableComponent;
    instance.loadData();
  }
}

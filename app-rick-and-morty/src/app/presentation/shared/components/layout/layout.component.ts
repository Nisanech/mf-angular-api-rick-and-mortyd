import { Compiler, Component, Injector, NgModuleRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  async ngOnInit(): Promise<void> {
    
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component'
    });

    const ref = this.viewContainer.createComponent(m.CharacterCardComponent);
    
  }

//   async load(): Promise<void> {
 
//     const m = await loadRemoteModule({
//       type: 'module',
//       remoteEntry: 'http://localhost:4201/remoteEntry.js',
//       exposedModule: './Component'
//     });
//     console.log(m);
    

//     const ref = this.viewContainer.createComponent(m.CharacterCardComponent);
//     // const compInstance = ref.instance;
// }
}

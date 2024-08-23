import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { LayoutComponent } from './shared/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      // {
      //   path: '',
      //   loadComponent: () => import('mfe1/Component').then(m => m.CharacterCardComponent)
      // },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  },
    {
      path: 'personaje',
      loadComponent: () => import('mfe1/Component').then(m => m.CharacterCardComponent)
    },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { NotFoundComponent } from './core';
import {WeddinglocationsComponent} from './weddinglocations/weddinglocations.component';
import {WeddingComponent} from './wedding/wedding.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: 'villains',
    loadChildren: () =>
      import('./villains/villains.module').then(m => m.VillainsModule)
  },
  { path: 'about', component: AboutComponent },
  { path: 'weddinglocations', component: WeddinglocationsComponent },
  { path: 'wedding', component: WeddingComponent },
  { path: '**', component: NotFoundComponent }
];

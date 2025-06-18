import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

export const routes: Route[] = [
  { path: '',     redirectTo: '/map', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'map',  component: MapComponent },
  { path: '**',   redirectTo: '/map' }
];
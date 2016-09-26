import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PressReleasesComponent } from './press-releases/press-releases.component';
import { SpeechesComponent } from './speeches/speeches.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'press-releases', component: PressReleasesComponent },
  { path: 'speeches', component: SpeechesComponent },
  { path: '', component: HomeComponent },
  // { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

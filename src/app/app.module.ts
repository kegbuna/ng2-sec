import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { PressReleasesComponent } from './press-releases/press-releases.component';
import { SpeechesComponent } from './speeches/speeches.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryMenuComponent,
    PressReleasesComponent,
    SpeechesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

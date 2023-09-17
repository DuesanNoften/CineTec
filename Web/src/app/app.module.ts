import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminOptionsComponent } from './admin-options/admin-options.component';
import { IncorporateLocationComponent } from './incorporate-location/incorporate-location.component';
import { IncorporateScreenComponent } from './incorporate-screen/incorporate-screen.component';
import { IncorporateProyectionComponent } from './incorporate-proyection/incorporate-proyection.component';
import { IncorporateMovieComponent } from './incorporate-movie/incorporate-movie.component';
import { MovieSelectionComponent } from './movie-selection/movie-selection.component';
import { ProyectionSelectionComponent } from './proyection-selection/proyection-selection.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { LocationSelectionComponent } from './location-selection/location-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminOptionsComponent,
    IncorporateLocationComponent,
    IncorporateScreenComponent,
    IncorporateProyectionComponent,
    IncorporateMovieComponent,
    MovieSelectionComponent,
    ProyectionSelectionComponent,
    SeatSelectionComponent,
    LocationSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

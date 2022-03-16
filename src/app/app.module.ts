import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageTableComponent } from './pages/page-table/page-table.component';
import { PageCardsComponent } from './pages/page-cards/page-cards.component';
import { PageGeolocationComponent } from './pages/page-geolocation/page-geolocation.component';
import { CardCountryComponent } from './components/card-country/card-country.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NumberFormatterPipe } from './pipes/number-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageAccueilComponent,
    PageTableComponent,
    PageCardsComponent,
    PageGeolocationComponent,
    CardCountryComponent,
    PageNotFoundComponent,
    NumberFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

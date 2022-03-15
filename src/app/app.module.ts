import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageTableComponent } from './pages/page-table/page-table.component';
import { PageCardsComponent } from './pages/page-cards/page-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageAccueilComponent,
    PageTableComponent,
    PageCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

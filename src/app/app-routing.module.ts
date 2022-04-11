import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageCardsComponent } from './pages/page-cards/page-cards.component';
import { PageGeolocationComponent } from './pages/page-geolocation/page-geolocation.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageTableComponent } from './pages/page-table/page-table.component';

const routes: Routes = [
  { path: 'countries', component: PageAccueilComponent },
  { path: 'countries/table', component: PageTableComponent },
  { path: 'countries/cards', component: PageCardsComponent },
  { path: 'countries/geolocation', component: PageGeolocationComponent },
  { path: 'countries/geolocation/:isocode', component: PageGeolocationComponent },
  { path: '', redirectTo: 'countries', pathMatch: 'full' },
  {
    path: '**', pathMatch: 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

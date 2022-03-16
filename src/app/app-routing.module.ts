import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageCardsComponent } from './pages/page-cards/page-cards.component';
import { PageGeolocationComponent } from './pages/page-geolocation/page-geolocation.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageTableComponent } from './pages/page-table/page-table.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'table', component: PageTableComponent },
  { path: 'cards', component: PageCardsComponent },
  { path: 'geolocation', component: PageGeolocationComponent },
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAccueilComponent } from './pages/page-accueil/page-accueil.component';
import { PageCardsComponent } from './pages/page-cards/page-cards.component';
import { PageTableComponent } from './pages/page-table/page-table.component';

const routes: Routes = [
  { path: '', component: PageAccueilComponent },
  { path: 'table', component: PageTableComponent },
  { path: 'cards', component: PageCardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

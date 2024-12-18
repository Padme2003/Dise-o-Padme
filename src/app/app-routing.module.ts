import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grid1Component } from './components/grid-1/grid-1.component';
import { Grid2Component } from './components/grid-2/grid-2.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { Deber4Component } from './components/deber-4/deber-4.component';
import { Deber5Component } from './components/deber-5/deber-5.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'grid-1', component: Grid1Component },
  { path: 'grid-2', component: Grid2Component },
  { path: 'cards', component: CardsComponent },
  { path: 'deber-4', component: Deber4Component },
  { path: 'deber-5', component: Deber5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

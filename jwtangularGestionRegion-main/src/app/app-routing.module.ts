import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PaysComponent } from './pays/pays.component';
import { RegiondetailsComponent } from './regiondetails/regiondetails.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'regiondetails', component: RegiondetailsComponent },
  { path: 'pays', component: PaysComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

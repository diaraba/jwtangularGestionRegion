import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutercompteComponent } from './ajoutercompte/ajoutercompte.component';
import { AjouterpaysComponent } from './ajouterpays/ajouterpays.component';
import { AjouterregionComponent } from './ajouterregion/ajouterregion.component';
import { CompteComponent } from './compte/compte.component';
import { LoginComponent } from './login/login.component';
import { PaysComponent } from './pays/pays.component';
import { RegiondetailsComponent } from './regiondetails/regiondetails.component';
import { RegionsComponent } from './regions/regions.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'regiondetails/:id', component: RegiondetailsComponent },
  { path: 'pays', component: PaysComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'compte', component: CompteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ajouterregion', component: AjouterregionComponent },
  { path: 'ajouterpays', component: AjouterpaysComponent },
  { path: 'ajoutercompte', component: AjoutercompteComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
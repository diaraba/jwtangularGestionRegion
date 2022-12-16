import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CompteComponent } from './compte/compte.component';
import { LoginComponent } from './login/login.component';
import { PaysComponent } from './pays/pays.component';
import { RegiondetailsComponent } from './regiondetails/regiondetails.component';
import { RegionsComponent } from './regions/regions.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'regiondetails', component: RegiondetailsComponent },
  { path: 'pays', component: PaysComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'compte', component: CompteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


  { path: '', redirectTo: 'accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

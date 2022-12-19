import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/auth/regions/';
const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http:HttpClient) { }
  ajouterPays(nom: any,  codeRegions: any, description: any, langue: any, superficie_regions: any, domaine_activite: any, image: any, pays: any): Observable<any>{
    
    return this.http.post(
      AUTH_API + 'create',
      {
        nom,  
        codeRegions, 
        description, 
        langue, 
        superficie_regions, 
        domaine_activite, 
        image, 
        pays
      },
      httpOptions
      );    
  }

}

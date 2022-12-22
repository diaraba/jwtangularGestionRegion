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
    
    let data = new FormData();
    data.append('code_regions',codeRegions);
    data.append('nom', nom);
    data.append('langue',langue);
    data.append('superficie_regions',superficie_regions);
    data.append('domaine_activite',domaine_activite);
    data.append('image',image);
    //data.append('id_pays',pays)
    return this.http.post(
      AUTH_API + `create/${pays}`,
      data
      );    
  }

  getAllRegion():Observable<any>{
    return this.http.get(`http://localhost:8080/api/auth/regions/read`);
  }
   
  getRegionId(id_region:any):Observable<any>{
   
    console.log(id_region)
    return this.http.get(`http://localhost:8080/api/auth/regions/regionParid/${id_region}`);
  }

  getAllPopulation(id_region:any):Observable<any>{
   
    console.log(id_region)
    return this.http.get(`http://localhost:8080/api/auth/regions/afficherpopulation/${id_region}`);
  }
}
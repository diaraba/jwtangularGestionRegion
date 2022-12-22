import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/pays/';
const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RolesService {

    constructor(private http: HttpClient) { }

    getAllRole():Observable<any>{
        return this.http.get(`http://localhost:8080/api/auth/role/lire`);
      }
    
}
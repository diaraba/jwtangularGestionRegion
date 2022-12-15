import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class PaysService {
 
  constructor(private http: HttpClient) { }

  modifierPays(id: any, password: any, username: any, email:any): Observable<any>{
    
    return this.http.put(AUTH_API + `${id}`,{password, username, email});
    
  }

}

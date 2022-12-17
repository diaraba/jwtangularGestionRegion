import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions={
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }

  
   register(username:string, email:string, role:string, password:string): Observable<any>{
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,

        password,
      },
      httpOptions
    );
  }
}

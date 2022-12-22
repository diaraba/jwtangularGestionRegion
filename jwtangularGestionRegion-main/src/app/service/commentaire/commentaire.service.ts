import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/auth/commentaire/';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) { }
  ajouterCommentaire(contenu: any, user: any, regions: any): Observable<any>{
    alert("service:  " + user + "ss " + regions);
    let data = new FormData();
    data.append('contenu', contenu);
    return this.http.post(
      AUTH_API + `creer/${user}/${regions}`,
      data
      );    
  }

  getAllCommentForRegion(id_region:any):Observable<any>{
    
    return this.http.get(`http://localhost:8080/api/auth/commentaire/afficherCommentRegion/${id_region}`);
  }

}

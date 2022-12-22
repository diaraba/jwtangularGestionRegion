import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from '../service/region.service';
import Swal from 'sweetalert2';
import { StorageServiceService } from '../service/storage/storage.service.service';
import { CommentaireService } from '../service/commentaire/commentaire.service';

@Component({
  selector: 'app-regiondetails',
  templateUrl: './regiondetails.component.html',
  styleUrls: ['./regiondetails.component.css']
})
export class RegiondetailsComponent implements OnInit {
  regions:any;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  id:any;

  idUser:any;

  commentaires:any;
  form: any={
    contenu:null
  };
  populations: any;



  constructor(private route:ActivatedRoute, private regionService:RegionService, private stockage:StorageServiceService, private commentaire: CommentaireService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.stockage.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.stockage.getUser();
      this.roles = user.roles;
      this.idUser=user.id;
      console.log(this.idUser )  

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

     this.id = this.route.snapshot.params["id"];
    console.log(this.id)
 this.regionService.getRegionId(this.id).subscribe(data =>{
    this.regions = data
    console.log(data)
  })
  
  this.commentaire.getAllCommentForRegion(this.id).subscribe(data =>{
    this.commentaires = data
    console.log(data)
  })


  this.regionService.getAllPopulation(this.id).subscribe(data =>{
    this.populations = data
    console.log(data)
  })
  }

  onSubmit():void {

    const { contenu} = this.form;
    console.log(contenu);
    
    if(!this.isLoggedIn){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Vous devez vous connecter pour commenter!',
        footer: '<a href="/login">Connexion... </a>',
      })
      }
      else{
        this.commentaire.ajouterCommentaire(contenu,this.idUser, this.id).subscribe(data =>{
          alert("service:  " + this.idUser) 
          this.regions = data
          this.reloadPage();
          console.log(data)
        })
      }
  }
 
  reloadPage(): void {
    window.location.reload();
  }

  
}
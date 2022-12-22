import { Component, OnInit } from '@angular/core';
import { PaysService } from '../service/pays.service';

@Component({
  selector: 'app-ajouterpays',
  templateUrl: './ajouterpays.component.html',
  styleUrls: ['./ajouterpays.component.css']
})
export class AjouterpaysComponent implements OnInit {
  form: any = {
  nom: null,
  description: null,

  };

    isLoggedIn = false;
   isLoginFailed = false;
  image: any;

  

  constructor(private ajoutPaysService: PaysService) { }

  ngOnInit(): void {
  }

  chargeImage(event: any){
    this.image = event.target["files"][0]
    console.log(this.image);
  }

  onSubmit(): void {
    const { nom, description} = this.form;
    

    this.ajoutPaysService.ajouterPays(nom, this.image, description).subscribe({
      next: data => {
        console.log(data);
        if(data!=""){
          this.isLoggedIn = true;
        }
        else{
          this.isLoginFailed=true
        }
      },
     
    });
  }
}
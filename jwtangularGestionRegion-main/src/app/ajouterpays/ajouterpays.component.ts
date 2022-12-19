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
  codeRegions:null,
  
  };

    isLoggedIn = false;
   isLoginFailed = false;

  

  constructor(private ajoutPaysService: PaysService) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const { nom} = this.form;
    

    this.ajoutPaysService.ajouterPays(nom).subscribe({
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

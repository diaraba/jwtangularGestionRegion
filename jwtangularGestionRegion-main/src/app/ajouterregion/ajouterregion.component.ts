import { Component, OnInit } from '@angular/core';
import { PaysService } from '../service/pays.service';
import { RegionService } from '../service/region.service';

@Component({
  selector: 'app-ajouterregion',
  templateUrl: './ajouterregion.component.html',
  styleUrls: ['./ajouterregion.component.css']
})
export class AjouterregionComponent implements OnInit {

  form: any = {
    nom: null,
    codeRegions: null,
    description: null,
    langue: null,
    superficie_regions: null,
    domaine_activite: null,
    image: null,
    NomPays: null,
    };
  
      isLoggedIn = false;
     isLoginFailed = false;
  pays: any;
  image: any;

  constructor(private ajoutRegion: RegionService, private paysService: PaysService) { }

  ngOnInit(): void {
    this.paysService.getAllPay().subscribe(data =>{
      this.pays = data
      console.log(data)
    })
  }

  chargeImage(event: any){
    this.image = event.target["files"][0]
    console.log(this.image);
  }

  onSubmit(): void {
    const { nom, codeRegions, description, langue, superficie_regions, domaine_activite, image, NomPays} = this.form;
    

    this.ajoutRegion.ajouterPays(nom, codeRegions, description, langue, superficie_regions, domaine_activite, this.image, NomPays).subscribe({
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
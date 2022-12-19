import { Component, OnInit } from '@angular/core';
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
    pays: null,
    };
  
      isLoggedIn = false;
     isLoginFailed = false;

  constructor(private ajoutRegion: RegionService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { nom, codeRegions, description, langue, superficie_regions, domaine_activite, image, pays} = this.form;
    

    this.ajoutRegion.ajouterPays(nom, codeRegions, description, langue, superficie_regions, domaine_activite, image, pays).subscribe({
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

import { Component, OnInit } from '@angular/core';
import { PaysService } from '../service/pays.service';
import { RegionService } from '../service/region.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  nom: any;
  codeRegions: any;
  description: any;
  langue: any;
  superficie_regions: any;
  domaine_activite: any;
  image: any;
  NomPays: any;
  regions: any;
  pays: any;
  url:any;

  constructor(private regionService: RegionService, private paysService: PaysService) { }

  ngOnInit(): void {
  
    this.regionService.getAllRegion().subscribe(data =>{
      this.regions = data
      console.log(data)
    })

    this.paysService.getAllPay().subscribe(data =>{
      this.pays = data
      console.log(data)
    })

   for(let i=0; i<this.pays.length; i++){
     this.url=this.pays.image;
     console.log(this.url);
   }
  }

}
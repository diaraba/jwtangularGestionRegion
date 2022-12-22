import { Component, OnInit } from '@angular/core';
import { RegionService } from '../service/region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  regions:any;

  constructor(private regionService:RegionService) { }

  ngOnInit(): void {
    this.regionService.getAllRegion().subscribe(data =>{
      this.regions = data
      console.log(data)
    })
  }

}
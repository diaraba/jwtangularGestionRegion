import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaysService } from '../service/pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  id : any
  // form = {
  //   password: undefined,
  //   username: undefined,
  //   email:undefined
  // }

  constructor(private paysService: PaysService, private routes: ActivatedRoute) { }

  pays:any;
  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id'];
    this.paysService.getAllPay().subscribe(data =>{
      this.pays = data
      console.log(data)
    })

  } 

  updatePays(password:any, username:any,email:any){

    this.paysService.modifierPays(this.id, password,username,email).subscribe(data=>{
      console.log(data);
    })

  }

}
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/authentication/auth.service.service';
import { CompteService } from '../service/compte/compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    role: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  users:any;

  constructor(private compteService: CompteService) { }

  ngOnInit(): void {
    this.compteService.getAllUser().subscribe(data =>{
      this.users = data
      console.log(data)
    })
  }

 
}
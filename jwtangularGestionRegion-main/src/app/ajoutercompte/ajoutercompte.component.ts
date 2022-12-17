import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/authentication/auth.service.service';
import { CompteService } from '../service/compte/compte.service';

@Component({
  selector: 'app-ajoutercompte',
  templateUrl: './ajoutercompte.component.html',
  styleUrls: ['./ajoutercompte.component.css']
})
export class AjoutercompteComponent implements OnInit {

  
  form: any = {
    username: null,
    email: null,
    role: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private compteService: CompteService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, role, password } = this.form;

    this.compteService.register(username, email, role, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../service/authentication/auth.service.service';
import { StorageServiceService } from '../service/storage/storage.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  id:any;
  errorMessage = '';
  roles: string[] = [];


  constructor(private authService: AuthServiceService, private storageService: StorageServiceService, private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        // this.reloadPage();
        if(this.isLoggedIn == true){
          this.route.navigateByUrl("/accueil");
        }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
    

   
  }

  reloadPage(): void {
    window.location.reload();
  }

}

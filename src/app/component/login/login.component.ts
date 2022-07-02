import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/Model/auth';
import { AuthServiceService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth: Auth= {
    username:'',
    email:'',
    password: '',
  };

  constructor(private authService : AuthServiceService, private router:Router) {}

  ngOnInit(): void { }

  login(){
    this.authService.login(this.auth).subscribe({
      next:(response:any)=>{
        console.log(response);
        if(response.isLoggedIn){
          localStorage.setItem('admin', response.admin);
          localStorage.setItem('email', response.email);
          this.router.navigate(['/data']);
        }
      },
      error:(error:any)=>{
        console.log(error);
      },
    });
  }
}

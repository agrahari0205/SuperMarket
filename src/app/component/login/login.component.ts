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
  error:String='';

  constructor(private authService : AuthServiceService, private router:Router) {}

  ngOnInit(): void { }

  login(){
    this.authService.login(this.auth).subscribe({
      next:(response:any)=>{
        console.log(response);
        if(response===null || !response.success){
          this.error='Invalid Credentials';
          this.auth.email='';
          this.auth.password='';
        }else{
          localStorage.setItem('email', response.email);
          localStorage.setItem('password', response.password);
          this.router.navigate(['/data']);
        }
      },
      error:(error:any)=>{
        console.log(error);
      },
    });
  }
}

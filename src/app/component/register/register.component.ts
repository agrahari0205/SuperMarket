import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/Model/auth';
import { AuthServiceService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  auth: Auth={
    username:'',
    email: '',
    password: '',
  }

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {}

  register(){
    this.authService.register(this.auth).subscribe({
      next: (response:any)=>{
        console.log(response);
        this.router.navigate(['/login']);
      },
      error:(error)=>{
        console.log(error);
      },
    });
  }
}

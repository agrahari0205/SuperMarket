import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../Model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient, private router:Router) {}

  login(auth:Auth){
    return this.http.post('http://localhost:9091/api/auth/login', auth);
  }

  register(auth:Auth){
    return this.http.post('http://localhost:9091/api/auth/register', auth);
  }

  isLoggedIn(){
    return localStorage.getItem('username')!==null;
  }

  logout(){
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
  isAdmin(){
    return localStorage.getItem('admin')==='true';
  }
}

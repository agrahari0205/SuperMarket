import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Auth } from 'src/app/Model/auth';
import { Post } from 'src/app/Model/post';
import { AuthServiceService } from 'src/app/service/auth.service';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-owner-data',
  templateUrl: './owner-data.component.html',
  styleUrls: ['./owner-data.component.css']
})
export class OwnerDataComponent implements OnInit {
  isAdmin: boolean=false;
  data: Post[]=[]

  constructor(
    private authService: AuthServiceService,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAdmin=this.authService.isAdmin();
    this.getData();
  }
  getData(){
    this.postService.getAllData().subscribe({
      next:(response: any)=>{
        this.data=response;
      },
      error:(error:any)=>{
        console.log(error);
      },
    });
  }
  update(id:number){
    this.router.navigate(['/addItem', id]);
  }
  delete(id:number){
    this.postService.delete(id).subscribe({
      next:(response:any)=>{
        console.log(response);
        this.getData();
      },
      error: (error:any)=>{
        console.log(error);
      },
    });
  }

}

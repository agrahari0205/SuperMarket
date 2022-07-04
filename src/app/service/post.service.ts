import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../Model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http:HttpClient) {}

  save(post: Post){
    console.log(post);
    return this.http.post('http://localhost:9091/api/post/create',post);
  }
  update(post:Post){
    console.log(post);
    return this.http.put('http://localhost:9091/api/post/update', post);
  }
  getData(id:number){
    return this.http.get(`http://localhost:9091/api/post/${id}`);
  }
  delete(id:number){
    return this.http.delete(`http://localhost:9091/api/post/delete/${id}`);
  }
  getAllData(){
    return this.http.get('http://localhost:9091/api/post/all');
  }
}

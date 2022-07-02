import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  id!: number;
  data: Post = {
    id: 0,
    name: '',
    quantity: 0,
    CostPrice: 0,
    SalePrice: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.data.id = this.route.snapshot.params['id'];
    this.postService.getData(this.data.id).subscribe({
      next: (response: any) => {
        this.data = response;
      },
    });
  }
  AddData() {
    if (this.data.id === 0) {
      this.postService.save(this.data).subscribe({
        next: (response: any) => {
          console.log(response);
          this.router.navigate(['/']);
        },
      });
    } else {
      this.postService.update(this.data).subscribe({

        next: (response: any) => {
          console.log(response);
          this.router.navigate(['/']);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }

}

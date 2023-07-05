import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() postsInner!: Posts;
  url: string = environment.blog.posts;
  data: Posts[] = [];
  constructor(public service: RequestService){

  }
  ngOnInit(): void {
    this.service.getRequest<Posts[]>(this.url).subscribe((data) =>{
      this.data = data
    })
  }
}

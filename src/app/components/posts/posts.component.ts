import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { Home_posts } from 'src/app/models/home_tags';
import { Posts } from 'src/app/models/posts';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  standalone: true,
  imports: [RouterModule, NgForOf]
})
export class PostsComponent implements OnInit {
  @Input() postsInner!: Posts;
  url: string = environment.home.tags;
  data: Home_posts[] = [];
  id: number = +this.activeRouter.snapshot.params['id']
  constructor(public service: RequestService, private router: Router, public activeRouter: ActivatedRoute){

  }
  ngOnInit(): void {
    this.service.getRequest<Home_posts[]>(this.url).subscribe((data) =>{
      this.data = data
    })
  }
}

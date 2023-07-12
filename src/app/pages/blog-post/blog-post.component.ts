import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Home_posts } from 'src/app/models/home_tags';
import { Reads } from 'src/app/models/read';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  id: number = +this.activeRoute.snapshot.params['id'] - 1
  url: string = environment.home.tags;
  data: Home_posts[] = [];
  constructor(public service: RequestService, private router: Router, public activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.service.getRequest<Home_posts[]>(this.url).subscribe((data) => {
      this.data = data


    })
  }
}

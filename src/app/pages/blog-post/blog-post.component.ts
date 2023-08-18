import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JoinComponent } from 'src/app/components/join/join.component';
import { ReadsComponent } from 'src/app/components/reads/reads.component';
import { Home_posts } from 'src/app/models/home_tags';
import { Reads } from 'src/app/models/read';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css'],
  standalone: true,
  imports: [JoinComponent, ReadsComponent]
})
export class BlogPostComponent implements OnInit {

  id: number = +this.activeRoute.snapshot.params['id'] 
  url: string = environment.home.tags;
  data!: Home_posts;
  constructor(public service: RequestService, private router: Router, public activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.service.getRequest<Home_posts>(this.url + `/${this.id}`).subscribe((data) => {
      this.data = data


    })
  }
}

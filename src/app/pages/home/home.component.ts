import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthorsComponent } from 'src/app/components/authors/authors.component';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { HomePostsComponent } from 'src/app/components/home-posts/home-posts.component';
import { JoinComponent } from 'src/app/components/join/join.component';
import { Authors } from 'src/app/models/authors';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports:[AuthorsComponent,HomePostsComponent, CategoryComponent, JoinComponent, RouterModule, NgForOf]
})
export class HomeComponent {
  id:number = +this.activeRoute.snapshot.params['id']
  url: string = environment.home.authors;
  data: Authors[] = [];
  @Input() authorsInner!: Authors
  constructor(public service: RequestService, private router: Router, public activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.service.getRequest<Authors[]>(this.url + "?_limit=4").subscribe((data) => {
      this.data = data
      
    
    })
  }
}


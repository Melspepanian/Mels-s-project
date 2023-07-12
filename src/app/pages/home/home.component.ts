import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Authors } from 'src/app/models/authors';
import { Category } from 'src/app/models/category';
import { Home_posts } from 'src/app/models/home_tags';
import { Tags } from "src/app/models/tags";
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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


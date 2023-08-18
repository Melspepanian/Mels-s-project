import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Home_posts } from 'src/app/models/home_tags';

import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-posts',
  templateUrl: './home-posts.component.html',
  styleUrls: ['./home-posts.component.css'],
  standalone: true,
  imports: [RouterModule, NgForOf]
})
export class HomePostsComponent implements OnInit {
  @Input() homeInner!:Home_posts;
 url:string = environment.home.tags;
 data: Home_posts[] = [
 ]

 constructor(public service: RequestService, ){

 }
 ngOnInit(): void {
   this.service.getRequest<Home_posts[]>(this.url + '?_limit=4').subscribe((data) =>{
    this.data = data
   
    
   })
 }
}

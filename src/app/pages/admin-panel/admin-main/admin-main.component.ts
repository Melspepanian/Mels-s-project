import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Authors } from 'src/app/models/authors';
import { Category } from 'src/app/models/category';
import { Home_posts } from 'src/app/models/home_tags';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
  standalone:true,
  imports: [RouterOutlet]
})
export class AdminMainComponent implements OnInit {
  constructor(public service: RequestService){

  }
  ngOnInit(): void {
    this.service.getRequest<Category[]>(this.url).subscribe((data) => {
      this.data = data;
     this.service.getRequest<Authors[]>(this.sec_url).subscribe((sec_data)=>{
      this.sec_data = sec_data;
      
     }) 
     this.service.getRequest<Home_posts[]>(this.third_url).subscribe((third_data) =>{
      this.third_data = third_data
     })
    })
  }
url:string = environment.home.category;
data: Category[] = [];

sec_url:string = environment.home.authors;
sec_data:Authors[] = [];
third_url:string = environment.home.tags
third_data:Home_posts[] = []

}

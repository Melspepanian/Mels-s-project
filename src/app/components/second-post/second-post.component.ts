import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Second_post } from 'src/app/models/second-post';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-second-post',
  templateUrl: './second-post.component.html',
  styleUrls: ['./second-post.component.css']
})
export class SecondPostComponent implements OnInit {
@Input() secondPost!:Second_post;
url:string = environment.category_page.second_post;
data:Second_post[] = [];
@Input() categoryInner:Category[] = [];
@Input() categoryId!:number 


constructor(public service: RequestService){

}
ngOnInit(): void {
  this.service.getRequest<Second_post[]>(this.url).subscribe((data) =>{
    this.data = data
    console.log(this.categoryInner);
    console.log(this.categoryId);
    
    
  
   
    
  })
  
}
}

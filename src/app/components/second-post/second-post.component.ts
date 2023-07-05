import { Component, Input, OnInit } from '@angular/core';
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
constructor(public service: RequestService){

}
ngOnInit(): void {
  this.service.getRequest<Second_post[]>(this.url).subscribe((data) =>{
    this.data = data
  })
}
}

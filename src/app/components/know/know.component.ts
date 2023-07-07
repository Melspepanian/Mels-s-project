import { Component, OnInit } from '@angular/core';
import { Know_post } from 'src/app/models/know_models';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-know',
  templateUrl: './know.component.html',
  styleUrls: ['./know.component.css']
})
export class KnowComponent implements OnInit {
url: string = environment.about_us.know_post;
data: Know_post[] = [];
constructor(public sevice: RequestService){

}
ngOnInit(): void {
  this.sevice.getRequest<Know_post[]>(this.url).subscribe((data) =>{
    this.data = data
  })
}
}

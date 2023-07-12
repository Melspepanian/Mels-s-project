import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authors } from 'src/app/models/authors';
import { Posts } from 'src/app/models/posts';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

constructor( public service: RequestService, public activeRoute: ActivatedRoute){

}
url:string = environment.home.authors;
data: Authors[] = []
id:number = +this.activeRoute.snapshot.params['id'] - 1
ngOnInit(): void {
 
    this.service.getRequest<Authors[]>(this.url).subscribe((data) => 
      this.data = data
      )
    
}
}


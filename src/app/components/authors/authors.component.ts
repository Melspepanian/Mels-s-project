import { Component, Input, OnInit } from '@angular/core';
import { Authors } from 'src/app/models/authors';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  @Input() authorsInner!: Authors;
  url: string = environment.home.authors;
  data: Authors[] = [];
  constructor(public service:RequestService ){
    
  }
  ngOnInit(): void {
    this.service.getRequest<Authors[]>(this.url).subscribe((data)=>{
      this.data = data 
    })
  }
}

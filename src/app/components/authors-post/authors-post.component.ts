import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Authors_post,  } from 'src/app/models/author_post';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-authors-post',
  templateUrl: './authors-post.component.html',
  styleUrls: ['./authors-post.component.css'],
  standalone : true,
  imports: [NgForOf]
})
export class AuthorsPostComponent implements OnInit {
@Input() authorsPostInner!: Authors_post;
url: string = environment.author.authors_post;
data: Authors_post[] = [];
constructor(public service: RequestService){

}
ngOnInit(): void {
  this.service.getRequest<Authors_post[]>(this.url).subscribe((data) => {
    this.data = data
  })
}
}

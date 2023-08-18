import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Tags } from 'src/app/models/tags';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  standalone: true,
  imports: [NgForOf]
})
export class TagsComponent implements OnInit {
@Input() tagsInner!:Tags;
url:string = environment.category_page.tags;
data: Tags[] = [];
constructor(public service: RequestService){

}
ngOnInit(): void {
  this.service.getRequest<Tags[]>(this.url).subscribe((data) => {
    this.data = data
  })
}

}

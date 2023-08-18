import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Sec_category } from 'src/app/models/second_category';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-second-category',
  templateUrl: './second-category.component.html',
  styleUrls: ['./second-category.component.css'],
  standalone: true,
  imports: [NgForOf]
})
export class SecondCategoryComponent implements OnInit {
 @Input() secondCategoryInner!: Sec_category;
 url:string = environment.category_page.second_category;
 data: Sec_category[] = [];
 constructor(public service: RequestService){

 }
 ngOnInit(): void {
  this.service.getRequest<Sec_category[]>(this.url).subscribe((data) => {
    this.data = data
  })   
 }

}

import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
 @Input() categoryInner!: Category;
 url:string = environment.home.category;
 data: Category[] = [];
 constructor(public service: RequestService){

 }
 ngOnInit(): void {
   this.service.getRequest<Category[]>(this.url).subscribe((data) =>{
    this.data = data
   })
 }
}

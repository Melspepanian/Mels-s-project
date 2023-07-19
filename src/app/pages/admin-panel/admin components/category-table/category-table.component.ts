import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
constructor(public service: RequestService){}
isTrue:boolean = false;
data: Category[] = [];
url: string = environment.home.category;

ngOnInit(): void {
  this.service.getRequest<Category[]>(this.url).subscribe((data) => {
    this.data = data
  })
}

delete(id:number){
this.service.delete(this.url + `/${id}`).subscribe((data)=>{

})
  
}
edit(id:number){
   this.isTrue === false ? this.isTrue = true : this.isTrue = false
}
}


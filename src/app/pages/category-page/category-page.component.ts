import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Posts } from 'src/app/models/posts';
import { Sec_category } from 'src/app/models/second_category';
import { Tags } from 'src/app/models/tags';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})

export class CategoryPageComponent implements OnInit {
data!: Category;
url:string = environment.home.category;
id: number = +this.activeRouter.snapshot.params['id']
constructor(public service: RequestService, private route: Router, public activeRouter: ActivatedRoute){

}
ngOnInit(): void {
  this.service.getRequest<Category>(this.url + `/${this.id}`).subscribe((data) => {
    this.data = data
  })
}
}


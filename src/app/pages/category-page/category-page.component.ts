import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecondCategoryComponent } from 'src/app/components/second-category/second-category.component';
import { SecondPostComponent } from 'src/app/components/second-post/second-post.component';
import { TagsComponent } from 'src/app/components/tags/tags.component';
import { Category } from 'src/app/models/category';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
  standalone: true,
  imports: [SecondPostComponent, SecondCategoryComponent, TagsComponent]
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


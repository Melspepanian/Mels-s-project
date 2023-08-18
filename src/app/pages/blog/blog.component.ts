import { Component } from '@angular/core';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { JoinComponent } from 'src/app/components/join/join.component';
import { PostsComponent } from 'src/app/components/posts/posts.component';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone: true,
  imports: [JoinComponent,CategoryComponent,PostsComponent]
})
export class BlogComponent {
}

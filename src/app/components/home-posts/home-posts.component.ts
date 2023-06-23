import { Component, Input } from '@angular/core';
import { Home_posts } from 'src/app/models/home_tags';

@Component({
  selector: 'app-home-posts',
  templateUrl: './home-posts.component.html',
  styleUrls: ['./home-posts.component.css']
})
export class HomePostsComponent {
@Input() homeInner!:Home_posts
}

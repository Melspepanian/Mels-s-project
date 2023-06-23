import { Component } from '@angular/core';
import { Posts } from 'src/app/models/posts';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  allPosts: Posts[] = [
    {
      id: 1,
      img: "assets/images/author2.png",
      description: "Business",
      title: "Font sizes in UI design: The complete guide to follow",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      img: "assets/images/author3.png",
      description: "ECONOMY",
      title: "How to build rapport with your web design clients",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
}

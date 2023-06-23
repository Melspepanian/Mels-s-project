import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Posts } from 'src/app/models/posts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  category: Category[] = [
    {
      id: 1,
      img: "../../../assets/images/business-and-trade 1.png",
      title: "Bussines",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
    },
    {
      id: 2,
      img: "../../../assets/images/xxxx.png",
      title: "Startup",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
    },
    {
      id: 3,
      img: "../../../assets/images/business-and-trade 1 (1).png",
      title: "Economy",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
    },
    {
      id: 4,
      img: "../../../assets/images/business-and-trade 1 (2).png",
      title: "Technology",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
    },
  ]
  posts: Posts[] = [
    {
      id: 1,
      img: "assets/images/blog2.png",
      description: "Startup",
      title: "Design tips for designers that cover everything you need",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident."
    },
    {
      id: 2,
      img: "assets/images/blog3.png",
      description: "Businnes",
      title: "How to build rapport with your web design clients",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      id: 3,
      img: "assets/images/blog4.png",
      description: "Startup",
      title: "Logo design trends to avoid in 2022",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      id: 4,
      img: "assets/images/blog5.png",
      description: "TECHNOLOGY",
      title: "8 Figma design systems you can download for free today",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      id: 5,
      img: "assets/images/blog2.png",
      description: "ECONOMY",
      title: "Font sizes in UI design: The complete guide to follow",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
  ]

}

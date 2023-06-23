import { Component } from '@angular/core';
import { Reads } from 'src/app/models/read';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
  reads: Reads[]= [
    {
    img: "assets/images/blog2.png",
    author: " John   Doe   | ",
    date: "Aug 23, 2021 ",
    title: "A UX Case Study Creating a Studious Environment for Students: ",
    paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  },
  {
    img: "assets/images/blog3.png",
    author: " John   Doe   | ",
    date: "Aug 23, 2021 ",
    title: "A UX Case Study Creating a Studious Environment for Students: : ",
    paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  },
  {
    img: "assets/images/blog4.png",
    author: " John   Doe   | ",
    date: "Aug 23, 2021 ",
    title: "A UX Case Study Creating a Studious Environment for Students: : ",
    paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
  }
  ]
  

  
}

import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Posts } from 'src/app/models/posts';
import { Sec_category } from 'src/app/models/second_category';
import { Tags } from 'src/app/models/tags';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})

export class CategoryPageComponent {
  posts: Posts[] = [
    {
      id: 1,
      img: "assets/images/photo1687437433.jpeg",
      description: "Startup",
      title: "Top 6 free website mockup tools 2022",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident."
    },
    {
      id: 2,
      img: "assets/images/photo1687437433.jpeg",
      description: "Businnes",
      title: "How to build rapport with your web design clients",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      id: 3,
      img: "assets/images/photo1687437433.jpeg",
      description: "Startup",
      title: "Logo design trends to avoid in 2022",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      id: 4,
      img: "assets/images/photo1687437433.jpeg",
      description: "TECHNOLOGY",
      title: "8 Figma design systems you can download for free today",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      id: 5,
      img: "assets/images/photo1687437433.jpeg",
      description: "ECONOMY",
      title: "Font sizes in UI design: The complete guide to follow",
      paragraph: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
  ]
  sec_category: Sec_category[] = [
    {
      id:1,
      img: "assets/images/Component 4.png",
      paragraph: "Startup"
    },
    {
      id:2,
      img: "assets/images/business-and-trade 1.png",
      paragraph: "Business"
    },
    {
      id:3,
      img: "assets/images/business-and-trade 1 (1).png",
      paragraph: "Business"
    },
    {
      id:4,
      img: "assets/images/business-and-trade 1 (2).png",
      paragraph: "Business"
    }
    
  ]
  tags: Tags[] = [
    {
      id:1,
      text:"Bussinnes"
    },
    {
      id:2,
      text:"Experience"
    },
    {
      id:3,
      text:"Screen"
    },
    {
      id:4,
      text:"Technology"
    },
    {
      id:5,
      text:"Marketing"
    },
    {
      id:6,
      text:"Life"
    }
  ]

   

}


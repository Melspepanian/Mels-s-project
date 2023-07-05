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


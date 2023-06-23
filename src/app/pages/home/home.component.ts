import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Authors } from 'src/app/models/authors';
import { Category } from 'src/app/models/category';
import { Home_posts } from 'src/app/models/home_tags';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
  authors: Authors[] = [
    {
      id: 1,
      img: "../../../assets/images/section_6_1.png",
      title: "Floyd Mailes",
      paragraph: "Content Writer @Company",
      socials: ["../../../assets/images/facebook.svg", "assets/images/twitter.svg", "assets/images/instagram.svg", "../../../assets/images/linkedIn.png"]

    },
    {
      id: 2,
      img: "../../../assets/images/section_6_2.png",
      title: "Dianne Russell",
      paragraph: "Content Writer @Company",
      socials: ["../../../assets/images/facebook.svg", "assets/images/twitter.svg", "assets/images/instagram.svg", "../../../assets/images/linkedIn.png"]

    },
    {
      id: 3,
      img: "../../../assets/images/section_6_3.png",
      title: "Jenny Wilson",
      paragraph: "Content Writer @Company",
      socials: ["../../../assets/images/facebook.svg", "assets/images/twitter.svg", "assets/images/instagram.svg", "../../../assets/images/linkedIn.png"]

    },
    {
      id: 4,
      img: "../../../assets/images/section_6_4.png",
      title: "Leslie Alexander",
      paragraph: "Content Writer @Company",
      socials: ["../../../assets/images/facebook.svg", "assets/images/twitter.svg", "assets/images/instagram.svg", "../../../assets/images/linkedIn.png"]

    }


  ]
  tags: Home_posts[] = [
    {
      id: 1,
      by: "By",
      author: "John Doe  ",
      date: "|  May 23, 2022",
      title: "8 Figma design systems that you can download for free today."
    },
    {
      id: 2,
      by: "By",
      author: "John Doe  ",
      date: "|  May 23, 2022",
      title: "8 Figma design systems that you can download for free today."
    },
    {
      id: 3,
      by: "By",
      author: "John Doe  ",
      date: "|  May 23, 2022",
      title: "8 Figma design systems that you can download for free today."
    },
    {
      id: 4,
      by: "By",
      author: "John Doe  ",
      date: "|  May 23, 2022",
      title: "8 Figma design systems that you can download for free today."
    }
  ]
}

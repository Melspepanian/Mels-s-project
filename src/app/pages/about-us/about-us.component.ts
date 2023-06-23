import { Component } from '@angular/core';
import { Authors } from 'src/app/models/authors';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
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

    },
    {
      id: 5,
      img: "../../../assets/images/user10.png",
      title: "Guy Hawkins",
      paragraph: "Content Writer @Company",
      socials: ["../../../assets/images/facebook.svg", "assets/images/twitter.svg", "assets/images/instagram.svg", "../../../assets/images/linkedIn.png"]
    },
    {
      id: 6,
      img: "../../../assets/images/user6.png",
      title: "Eleanor Pena",
      paragraph: "Content Writer @Company",
      socials: ["../../../assets/images/facebook.svg", "assets/images/twitter.svg", "assets/images/instagram.svg", "../../../assets/images/linkedIn.png"]
    },
    {
      id: 7,
      img: "../../../assets/images/user7.png",
      title: "Robert Foxs",
      paragraph: "Content Writer @Company",
      socials: ["../../../assets/images/facebook.svg", "assets/images/twitter.svg", "assets/images/instagram.svg", "../../../assets/images/linkedIn.png"]
    },
    {
      id: 8,
      img: "assets/images/user8.png",
      title: "Jacob Jones",
      paragraph: "Content Writer @Company",
      socials: ["../../../assets/images/facebook.svg", "assets/images/twitter.svg", "assets/images/instagram.svg", "../../../assets/images/linkedIn.png"]
    }



  ]

}

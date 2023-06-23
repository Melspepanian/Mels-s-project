import { Component, Input } from '@angular/core';
import { Sec_category } from 'src/app/models/second_category';

@Component({
  selector: 'app-second-category',
  templateUrl: './second-category.component.html',
  styleUrls: ['./second-category.component.css']
})
export class SecondCategoryComponent {
 @Input() secondCategoryInner!: Sec_category
}

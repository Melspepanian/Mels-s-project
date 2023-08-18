import { NgForOf } from '@angular/common';
import { Component, Input} from '@angular/core';
import { Authors } from 'src/app/models/authors';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  standalone: true,
  imports: [NgForOf]
})
export class AuthorsComponent {
  @Input() authorsInner!: Authors;
}



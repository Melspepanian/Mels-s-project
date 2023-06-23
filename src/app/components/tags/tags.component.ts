import { Component, Input } from '@angular/core';
import { Tags } from 'src/app/models/tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
@Input() tagsInner!:Tags
}

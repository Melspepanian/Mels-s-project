import { Component, Input } from '@angular/core';
import { Privacy } from 'src/app/models/privacy_policy';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent {
@Input() privacyInner!: Privacy 
}

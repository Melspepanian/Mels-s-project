import { Component, Input } from '@angular/core';
import { Reads } from 'src/app/models/read';

@Component({
  selector: 'app-reads',
  templateUrl: './reads.component.html',
  styleUrls: ['./reads.component.css']
})
export class ReadsComponent {
@Input() readsInner!: Reads
}

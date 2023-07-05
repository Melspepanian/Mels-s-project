import { Component, Input, OnInit } from '@angular/core';
import { Reads } from 'src/app/models/read';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reads',
  templateUrl: './reads.component.html',
  styleUrls: ['./reads.component.css']
})
export class ReadsComponent implements OnInit {
@Input() readsInner!: Reads
url: string = environment.blog_posts.reads;
data: Reads[] = [];
constructor(public service: RequestService){

}
ngOnInit(): void {
  this.service.getRequest<Reads[]>(this.url).subscribe((data) =>{
    this.data = data
  })
}
}

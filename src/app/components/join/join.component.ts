import { Component, Input, OnInit } from '@angular/core';
import { Join } from 'src/app/models/join';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
@Input() joinInner!:Join;
url: string = environment.home.join;
data: Join[] = [];
constructor(public service: RequestService){

}
ngOnInit(): void {
  this.service.getRequest<Join[]>(this.url).subscribe((data) => {
    this.data = data
  })
}
}

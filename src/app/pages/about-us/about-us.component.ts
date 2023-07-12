import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Authors } from 'src/app/models/authors';
import { Category } from 'src/app/models/category';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  url: string = environment.home.authors;
  data: Authors[] = [];
  @Input() authorsInner!: Authors
  constructor(public service: RequestService, private router: Router, public activeRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.service.getRequest<Authors[]>(this.url).subscribe((data) => {
      this.data = data
      console.log(this.data[this.activeRoute.snapshot.params['id']]);
    })
  }
}


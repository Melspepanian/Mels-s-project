import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthorsComponent } from 'src/app/components/authors/authors.component';
import { JoinComponent } from 'src/app/components/join/join.component';
import { KnowComponent } from 'src/app/components/know/know.component';
import { Authors } from 'src/app/models/authors';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true,
  imports: [JoinComponent, KnowComponent, AuthorsComponent, RouterModule]
})
export class AboutUsComponent {
  id:number = this.activeRoute.snapshot.params['id'] 
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


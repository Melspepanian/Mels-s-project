import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsPostComponent } from 'src/app/components/authors-post/authors-post.component';
import { Authors } from 'src/app/models/authors';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  standalone: true,
  imports: [AuthorsPostComponent]
})
export class AuthorComponent implements OnInit {

  constructor(public service: RequestService, public activeRoute: ActivatedRoute) {

  }
  url: string = environment.home.authors;
  data!: Authors;
  id: number = +this.activeRoute.snapshot.params['id'] 
  ngOnInit(): void {

    this.service.getRequest<Authors>(this.url + `/${this.id}`).subscribe((data) =>
      this.data = data
     
      
    )

    

  }
}


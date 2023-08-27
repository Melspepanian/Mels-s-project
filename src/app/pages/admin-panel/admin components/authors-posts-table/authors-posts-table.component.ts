import { NgForOf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Authors_post } from 'src/app/models/author_post';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-authors-posts-table',
  templateUrl: './authors-posts-table.component.html',
  styleUrls: ['./authors-posts-table.component.css'],
  standalone: true,
  imports: [NgForOf, NgStyle, ReactiveFormsModule]
})
export class AuthorsPostsTableComponent implements OnInit {
  constructor(public service: RequestService, public fb: FormBuilder){

  }
  data: Authors_post[] = [];
  url: string = environment.author.authors_post;
  form!: FormGroup;
  item: Authors_post | undefined;
  isTrue:boolean = false;
  request:boolean = true;
  value!: Authors_post;
  
  closeDelete : boolean = false
  ngOnInit(): void {
    this.dataRequest()
    this.form = this.fb.group({
      id:"",
      img: "",
      paragraph: "",
      description: "",
      title: ""
    
     
    })
  }
  dataRequest(){
    this.service.getRequest<Authors_post[]>(this.url).subscribe((data) =>{
    this.data = data
    })
  
  }
  delete(item?: Authors_post ) {
  
    this.item = item
    this.closeDelete = true;
  
  }
  edit(item: Authors_post) {
    this.isTrue === false ? this.isTrue = true : this.isTrue = false
    this.item = item
    console.log(item);
    this.request = true
    this.form.reset()
    this.form.patchValue({
      img: item.img,
      paragraph: item.paragraph,
      title: item.title,
      description: item.description,
      
      
      
    })
  
    
    
  }
  deleteWindow(id: number | undefined) {
    this.service.delete(this.url + `/${id}`).subscribe((data) => { })
    this.dataRequest()
    this.closeDelete = false
  }
  save(id: number | undefined) {
    if (this.request) {
      this.service.put(`${this.url}/${id}`, this.form.value).subscribe(() => { })
      this.dataRequest();
    } else {
      this.value = this.form.value
      this.service.post<Authors_post>(this.url, this.value).subscribe(() => {
        this.form.reset()
        this.dataRequest()
      })
    }
  }
  
  
  open(){
    this.isTrue === false ? this.isTrue = true : this.isTrue =  false
    this.request = false
    this.form.reset()
  }
  
  close(item?: Authors_post){
    this.isTrue = false;
    this.closeDelete = false;
  }
  
  
  
  
}

import { NgForOf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Join } from 'src/app/models/join';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-join-table',
  templateUrl: './join-table.component.html',
  styleUrls: ['./join-table.component.css'],
  standalone: true,
  imports: [NgForOf, NgStyle, ReactiveFormsModule]
})
export class JoinTableComponent implements OnInit {
  constructor(public service: RequestService, public fb: FormBuilder){

  }
  data: Join[] = [];
  url: string = environment.home.join;
  form!: FormGroup;
  item: Join | undefined;
  isTrue:boolean = false;
  request:boolean = true;
  value!: Join;
  
  closeDelete : boolean = false
  ngOnInit(): void {
    this.dataRequest()
    this.form = this.fb.group({
      id:"",
      title: "",
      paragraph: "",
      button: ""
    
     
    })
  }
  dataRequest(){
    this.service.getRequest<Join[]>(this.url).subscribe((data) =>{
    this.data = data
    })
  
  }
  delete(item?: Join ) {
  
    this.item = item
    this.closeDelete = true;
  
  }
  edit(item: Join) {
    this.isTrue === false ? this.isTrue = true : this.isTrue = false
    this.item = item
    console.log(item);
    this.request = true
    this.form.reset()
    this.form.patchValue({
      title: item.title,
      paragraph: item.paragraph,
      button: item.button      
      
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
      this.service.post<Join>(this.url, this.value).subscribe(() => {
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
  
  close(item?: Join){
    this.isTrue = false;
    this.closeDelete = false;
  }
  
  
  
  
}

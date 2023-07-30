import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Know_post } from 'src/app/models/know_models';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-know-table',
  templateUrl: './know-table.component.html',
  styleUrls: ['./know-table.component.css']
})
export class KnowTableComponent implements OnInit{
  constructor(public service: RequestService, public fb: FormBuilder){

  }

  data: Know_post[] = [];
  url: string = environment.about_us.know_post;
  form!: FormGroup;
  item: Know_post | undefined;
  isTrue:boolean = false;
  request:boolean = true;
  value!: Know_post;
  closeDelete : boolean = false
ngOnInit(): void {
  this.dataRequest()
  this.form = this.fb.group({
    id:"",
    img: "",
    title: "",
    paragraph: "",
    second_title: ""
 
   
   
  })
}
dataRequest(){
  this.service.getRequest<Know_post[]>(this.url).subscribe((data) =>{
  this.data = data
  })

}
delete(item?: Know_post) {

  this.item = item
  this.closeDelete = true;

}
edit(item: Know_post) {
  this.isTrue === false ? this.isTrue = true : this.isTrue = false
  this.item = item
  console.log(item);
  this.request = true
  this.form.reset()
  this.form.patchValue({
    img: item.img,
    title: item.title,
    paragraph: item.paragraph,
    second_title: item.second_title,

    
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
    this.service.post<Know_post>(this.url, this.value).subscribe(() => {
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

close(item?: Know_post){
  this.isTrue = false;
  this.closeDelete = false;
}


}

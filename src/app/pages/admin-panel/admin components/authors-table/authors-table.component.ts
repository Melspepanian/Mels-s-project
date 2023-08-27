import { NgForOf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Authors } from 'src/app/models/authors';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-authors-table',
  templateUrl: './authors-table.component.html',
  styleUrls: ['./authors-table.component.css'],
  standalone: true,
  imports: [NgStyle, NgForOf, ReactiveFormsModule]
})
export class AuthorsTableComponent implements OnInit{
constructor(public service: RequestService, public fb: FormBuilder){

}
data: Authors[] = [];
url: string = environment.home.authors;
form!: FormGroup;
item: Authors | undefined;
isTrue:boolean = false;
request:boolean = true;
value!: Authors;

closeDelete : boolean = false
ngOnInit(): void {
  this.dataRequest()
  this.form = this.fb.group({
    id:"",
    img: "",
    title: "",
    paragraph: "",
    socials: "",
    sec_img: "",
   
  })
}
dataRequest(){
  this.service.getRequest<Authors[]>(this.url).subscribe((data) =>{
  this.data = data
  })

}
delete(item?: Authors ) {

  this.item = item
  this.closeDelete = true;

}
edit(item: Authors) {
  this.isTrue === false ? this.isTrue = true : this.isTrue = false
  this.item = item
  console.log(item);
  this.request = true
  this.form.reset()
  this.form.patchValue({
    img: item.img,
    title: item.title,
    sec_img: item.sec_img,
    paragraph: item.paragraph,
    socials: item.socials
    
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
    this.service.post<Authors>(this.url, this.value).subscribe(() => {
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

close(item?: Authors){
  this.isTrue = false;
  this.closeDelete = false;
}




}


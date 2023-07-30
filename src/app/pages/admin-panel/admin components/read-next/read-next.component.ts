import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reads } from 'src/app/models/read';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-read-next',
  templateUrl: './read-next.component.html',
  styleUrls: ['./read-next.component.css']
})
export class ReadNextComponent implements OnInit {
  constructor(public service: RequestService, public fb: FormBuilder){

  }

  data: Reads[] = [];
  url: string = environment.blog_posts.reads;
  form!: FormGroup;
  item: Reads | undefined;
  isTrue:boolean = false;
  request:boolean = true;
  value!: Reads;
  closeDelete : boolean = false
ngOnInit(): void {
  this.dataRequest()
  this.form = this.fb.group({
    id:"",
    img: "",
    title: "",
    paragraph: "",
    date: "",
    author: ""
 
   
   
  })
}
dataRequest(){
  this.service.getRequest<Reads[]>(this.url).subscribe((data) =>{
  this.data = data
  })

}
delete(item?: Reads) {

  this.item = item
  this.closeDelete = true;

}
edit(item: Reads) {
  this.isTrue === false ? this.isTrue = true : this.isTrue = false
  this.item = item
  console.log(item);
  this.request = true
  this.form.reset()
  this.form.patchValue({
    img: item.img,
    title: item.title,
    paragraph: item.paragraph,
    date: item.date,
    author: item.author
    
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
    this.service.post<Reads>(this.url, this.value).subscribe(() => {
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

close(item?: Reads){
  this.isTrue = false;
  this.closeDelete = false;
}




}


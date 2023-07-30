import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Home_posts } from 'src/app/models/home_tags';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-posts-table',
  templateUrl: './all-posts-table.component.html',
  styleUrls: ['./all-posts-table.component.css']
})
export class AllPostsTableComponent implements OnInit {
constructor(public service: RequestService, public fb: FormBuilder){

}
data: Home_posts[] = [];
url: string = environment.home.tags;
form!:FormGroup;
isTrue:boolean = false;
request:boolean = true;
item!:Home_posts | undefined;
value!:Home_posts;
closeDelete : boolean = false 

ngOnInit(): void {
  this.dataRequest()
  this.form = this.fb.group({
    img: "",
    title:"",
    date: "",
    paragraph: "",
    description: "",
    second_title: "",
    second_paragraph: "",
    second_img: "",
    author: ""
   
  })
}
dataRequest(){
  this.service.getRequest<Home_posts[]>(this.url).subscribe((data) =>{
  this.data = data
  })

}
delete(item?: Home_posts ) {

  this.item = item
  this.closeDelete = true;

}
edit(item: Home_posts) {
  this.isTrue === false ? this.isTrue = true : this.isTrue = false
  this.item = item
  console.log(item);
  this.request = true
  this.form.reset()
  this.form.patchValue({
    img: item.img,
    title: item.title,
    date: item.date,
    paragraph: item.paragraph,
    description: item.description,
    second_title: item.sec_title,
    second_paragraph: item.description_title,
    second_img: item.description_icon,
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
    this.service.post<Home_posts>(this.url, this.value).subscribe(() => {
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

close(item?: Home_posts){
  this.isTrue = false;
  this.closeDelete = false;
}


}

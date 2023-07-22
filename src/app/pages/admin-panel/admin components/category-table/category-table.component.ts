import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
  constructor(public service: RequestService, public fb: FormBuilder) { }
  isTrue: boolean = false;
  form!: FormGroup;
  data: Category[] = [];
  url: string = environment.home.category;
  item!: Category | undefined ;
  value!: Category;
  request: boolean = true;

  ngOnInit(): void {
    this.service.getRequest<Category[]>(this.url).subscribe((data) => {
      this.data = data
    })
    this.form = this.fb.group({
      img:"",
      title: "",
      paragraph: "",
    })
  }
  open() {
    this.isTrue === false ? this.isTrue = true : this.isTrue = false;
    this.form.reset()
    this.request = false

  }

  delete(id: number) {
    this.service.delete(this.url + `/${id}`).subscribe((data) => {
      this.ngOnInit()
    })

  }
  edit(item: Category) {
    this.isTrue === false ? this.isTrue = true : this.isTrue = false
    this.item = item
    console.log(item);
    this.request = true
    
    this.form.patchValue({
      title: item?.title,
      paragraph: item?.paragraph,
      img: "assets/images/business-and-trade 1 (1).png"
    })
  }
  close() {
    this.isTrue = false
  }
  save(id: number | undefined) {
    if(this.request){
      this.service.put(`${this.url}/${id}`, this.form.value).subscribe(() => {
        console.log();
        console.log(this.item)
      })
      }else{
          this.value = this.form.value
          this.service.post<Category>(this.url, this.value).subscribe(()=>{
          this.form.reset()
        })
      }
}
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sec_category } from 'src/app/models/second_category';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-category-table',
  templateUrl: './all-category-table.component.html',
  styleUrls: ['./all-category-table.component.css']
})
export class AllCategoryTableComponent implements OnInit{
  constructor(public service: RequestService, public fb: FormBuilder){

  }
  data: Sec_category[] = [];
  url: string = environment.category_page.second_category;
  form!: FormGroup;
  item: Sec_category | undefined;
  isTrue:boolean = false;
  request:boolean = true;
  value!: Sec_category;
  
  closeDelete : boolean = false
  ngOnInit(): void {
    this.dataRequest()
    this.form = this.fb.group({
      id:"",
      img: "",
      paragraph: "",
    
     
    })
  }
  dataRequest(){
    this.service.getRequest<Sec_category[]>(this.url).subscribe((data) =>{
    this.data = data
    })
  
  }
  delete(item?: Sec_category ) {
  
    this.item = item
    this.closeDelete = true;
  
  }
  edit(item: Sec_category) {
    this.isTrue === false ? this.isTrue = true : this.isTrue = false
    this.item = item
    console.log(item);
    this.request = true
    this.form.reset()
    this.form.patchValue({
      img: item.img,
      paragraph: item.paragraph,
      
      
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
      this.service.post<Sec_category>(this.url, this.value).subscribe(() => {
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
  
  close(item?: Sec_category){
    this.isTrue = false;
    this.closeDelete = false;
  }
  
  
  
  
  }
  


import {  NgForOf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Tags } from 'src/app/models/tags';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tags-table',
  templateUrl: './tags-table.component.html',
  styleUrls: ['./tags-table.component.css'],
  standalone: true,
  imports: [NgForOf, NgStyle, ReactiveFormsModule]
})
export class TagsTableComponent implements OnInit {
  constructor(public service: RequestService, public fb: FormBuilder) {

  }
  data: Tags[] = [];
  url: string = environment.category_page.tags;
  form!: FormGroup;
  item: Tags | undefined;
  isTrue: boolean = false;
  request: boolean = true;
  value!: Tags;

  closeDelete: boolean = false
  ngOnInit(): void {
    this.dataRequest()
    this.form = this.fb.group({
      id: "",
      text: ""


    })
  }
  dataRequest() {
    this.service.getRequest<Tags[]>(this.url).subscribe((data) => {
      this.data = data
    })

  }
  delete(item?: Tags) {

    this.item = item
    this.closeDelete = true;

  }
  edit(item: Tags) {
    this.isTrue === false ? this.isTrue = true : this.isTrue = false
    this.item = item
    console.log(item);
    this.request = true
    this.form.reset()
    this.form.patchValue({
      text: item.text



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
      this.service.post<Tags>(this.url, this.value).subscribe(() => {
        this.form.reset()
        this.dataRequest()
      })
    }
  }


  open() {
    this.isTrue === false ? this.isTrue = true : this.isTrue = false
    this.request = false
    this.form.reset()
  }

  close(item?: Tags) {
    this.isTrue = false;
    this.closeDelete = false;
  }

}

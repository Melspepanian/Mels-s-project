import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
form!:FormGroup;
constructor(public fb: FormBuilder){

}
ngOnInit(): void {
  this.form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9_-]{1,}@[a-zA-Z0-9]{1,}\.[a-z]{2,4}$/)]],
    message: "",
    select: ["", [Validators.required]]
  })
}
add(){
  console.log(true);
  
}
}

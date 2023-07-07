import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit  {
footerForm!:FormGroup;
constructor(public formFoot: FormBuilder){

}
ngOnInit(): void {
  this.footerForm = this.formFoot.group({
    email:  ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9_-]{1,}@[a-zA-Z0-9]{1,}\.[a-z]{2,4}$/)]]
  })
}
sendMail(){
  console.log(true);
  
}
}

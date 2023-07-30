import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
form!:FormGroup;
url:string = environment.contact.contact;
data: Contact[] = []
value!: Contact;
constructor(public fb: FormBuilder, public service: RequestService){

}
ngOnInit(): void {
  this.form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9_-]{1,}@[a-zA-Z0-9]{1,}\.[a-z]{2,4}$/)]],
    message:[ "", Validators.required],
    select: ["Query Related", [Validators.required]]
  })
}
add(){
  this.value = this.form.value
  this.service.http.post<Contact>(this.url, this.value).subscribe((data) => {
    console.log(data);
  })

  
  
}
}

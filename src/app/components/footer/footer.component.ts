import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Footer } from 'src/app/models/footer';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit  {
footerForm!:FormGroup;
url:string = environment.fotter.footer;
data: Footer[] = []
value!: Footer;
constructor(public formFoot: FormBuilder, public service: RequestService){

}
ngOnInit(): void {
  this.footerForm = this.formFoot.group({
    email:  ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9_-]{1,}@[a-zA-Z0-9]{1,}\.[a-z]{2,4}$/)]]
  })

}
sendMail(){
  console.log(true);
  this.value = this.footerForm.value;
  console.log(this.value);
  this.service.post<Footer>(this.url, this.value).subscribe((data) =>{
    console.log(data);
    
  })
  
  
}
}

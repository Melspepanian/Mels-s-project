import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],

  
})
export class LoginPageComponent implements OnInit {
  hide = true;
  url:string = environment.admin.admin;
  data:Admin[] = []
  form!:FormGroup;
  constructor(public fb:FormBuilder, public service: RequestService, private router: Router){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name:"",
      password: "",
    })
    this.service.getRequest<Admin[]>(this.url).subscribe((data)=>{
      this.data = data
    })
    
    
  }
  
  send(){
    if(this.form.get("name")?.value == this.data[0].name && this.form.get("password")?.value == this.data[0].password){
      this.form.enabled
      console.log(true);
      
    }else{
      this.form.disabled
    }
    
  }

}

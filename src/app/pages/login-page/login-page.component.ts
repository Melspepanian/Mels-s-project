import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { Token } from 'src/app/models/token';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],


})
export class LoginPageComponent implements OnInit {

  constructor(public fb: FormBuilder, public service: RequestService, public router: Router) {

  }
  hide = true;
  url: string = "https://reqres.in/api/login";
  form!: FormGroup;
  data!: Token;
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    })



  }

  send() {
    this.service.post<Admin>(this.url, this.form.value).subscribe((data) => {
      this.data = data as Token;
      console.log(this.data.token);
      localStorage.setItem('token', this.data.token);
      this.router.navigate(['/admin-panel']);
      
    })
  }


}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent  {
  @ViewChild('logout') logout!: ElementRef;
  @ViewChild('log_out_confirm') log_out_confirm!:ElementRef
  isTrue: boolean = false;
  constructor(public router: Router){}

  showLogOut(){
    this.isTrue === false ? this.isTrue = true : this.isTrue = false;
    if (this.isTrue) {
      this.logout.nativeElement.style.transform="translateY(0)"
     
    } else{
      this.logout.nativeElement.style.transform="translateY(-150px)"
    }
  }
  show_logOut_Confirm(){
    if(this.log_out_confirm.nativeElement.style.display === "none"){
      this.log_out_confirm.nativeElement.style.display = "flex"
    }else  
     this.log_out_confirm.nativeElement.style.display = "none"

    
  }
  delateToken(){
    localStorage.removeItem("token");
    this.router.navigate(['/login-page'])

  }
  
  
}

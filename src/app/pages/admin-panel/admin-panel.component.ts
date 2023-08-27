import { Component, ElementRef,  ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { AdminMainComponent } from './admin-main/admin-main.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, AdminMainComponent, RouterModule]
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

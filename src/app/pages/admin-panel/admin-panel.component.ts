import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent  {
  @ViewChild('logout') logout!: ElementRef;
  isTrue: boolean = false;

  showLogOut(){
    this.isTrue === false ? this.isTrue = true : this.isTrue = false;
    if (this.isTrue) {
      this.logout.nativeElement.style.transform="translateY(0)"
    } else{
      this.logout.nativeElement.style.transform="translateY(-150px)"
    }
  }
}

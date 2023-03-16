import { RoleService } from './../services/role.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-before-register',
  templateUrl: './before-register.component.html',
  styleUrls: ['./before-register.component.css']
})
export class BeforeRegisterComponent {

  constructor(private _RoleService :RoleService){
  }

  instructorRole() {
    localStorage.setItem('checkRole','2')
    this._RoleService.role.next(localStorage.getItem('checkRole')||"2")
  }


  userRole(){
    localStorage.setItem('checkRole','1')
  }
}

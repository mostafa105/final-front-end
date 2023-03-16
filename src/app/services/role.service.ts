import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
  

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  admin=new BehaviorSubject<any>(null);
  user=new BehaviorSubject<any>(null);
  instructor=new BehaviorSubject<any>(null);


  constructor() { }


  getInfo(role:string ,info :any){
    if(role=="user"){
      this.user.next(info);
    }else if(role=="instructor"){
      this.instructor.next(info);
    }else{
      this.admin.next(info);
    }
  }
}

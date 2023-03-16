import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() {
  
   }



token(){
    return localStorage.getItem('token')
}

userData(){
return (JSON.parse(localStorage.getItem('user')||"{}"))
}

id(){
  return (JSON.parse(localStorage.getItem('user')||"{}")).id ;
}
role(){
  return (JSON.parse(localStorage.getItem('user')||"{}")).role ;
}




}

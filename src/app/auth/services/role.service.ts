import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }
  role= new BehaviorSubject <string> (localStorage.getItem('checkRole')||'1');
}

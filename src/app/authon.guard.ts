import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthonGuard implements CanActivate {


  constructor(private authService:AuthService , private router:Router){}

  canActivate(){

  if(this.authService.userToken.getValue()!=null){
    return true
  }else{
    this.router.navigate(['/login'])
    return false
  }

  }



}

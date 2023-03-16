import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_key=localStorage.getItem('token');

  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.api_key}`
  });
  requestOptions= { headers:this.headers };

userToken=new BehaviorSubject<any>(null);
userRole=new BehaviorSubject<any>(1)
constructor(private  httpClient: HttpClient , private router:Router) {
if(localStorage.getItem('token')!=null){
  this.token();
}


   }

token(){
  this.userToken.next(localStorage.getItem('token'));
  this.userRole.next(JSON.parse(localStorage.getItem('user')||"1").role_id)
  
}

logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
this.userToken.next(null);
this.router.navigate(['/login'])
}

log():Observable<any>{
  return  this.httpClient.get(`http://127.0.0.1:8000/api/logout`,this.requestOptions)
}

register(formData:object ):Observable<any>{
 return  this.httpClient.post(`http://127.0.0.1:8000/api/register`,formData)
}

login(formData:object ):Observable<any>{
  return  this.httpClient.post(`http://127.0.0.1:8000/api/login`,formData)
 }

}
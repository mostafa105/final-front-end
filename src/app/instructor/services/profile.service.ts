import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data.service';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {


api_key=localStorage.getItem('token');

  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.api_key}`
  });
  requestOptions= { headers:this.headers };
  constructor(public _HttpClient: HttpClient) {}
  
  getProfile(id:number): Observable<any> {
  return this._HttpClient.get(`http://127.0.0.1:8000/api/getInstructorProfile/${id}`);
}



}

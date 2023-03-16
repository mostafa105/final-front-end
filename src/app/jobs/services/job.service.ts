
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

 

api_key=localStorage.getItem('token');

headers = new HttpHeaders({
  'Accept': 'application/json',
  'Authorization': `Bearer ${this.api_key}`
});
requestOptions= { headers:this.headers };
constructor(public _HttpClient: HttpClient) {}

getJobs(): Observable<any> {
return this._HttpClient.get(`http://127.0.0.1:8000/api/showOrderAccordingToTrack`,this.requestOptions);
}

applayJob(data:any):Observable<any>{
  return this._HttpClient.post(`http://127.0.0.1:8000/api/offer/store`,data,this.requestOptions)
}

}

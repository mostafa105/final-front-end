import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../classes/exam';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient:HttpClient) { }



  api_key=localStorage.getItem('token');

  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.api_key}`
  });
  requestOptions= { headers:this.headers };

getTest(id:number):Observable<{test:Question[],message:string}>{
 return  this.httpClient.get<{test:Question[],message:string}>(`http://127.0.0.1:8000/api/show/tests/${id}`);
}

sendAnswer(answers:any):Observable<any>{
  console.log({answer:answers})
  return  this.httpClient.post(`http://127.0.0.1:8000/api/test/answers`,{answer:answers},this.requestOptions);
}

getVerifiedSubtracks(id:number):Observable<any>{
  return  this.httpClient.get(`http://127.0.0.1:8000/api/getInstructorSubTrack/${id}`,this.requestOptions);
}

getUnverifiedSubtracks(id:number):Observable<any>{
  return  this.httpClient.get(`http://127.0.0.1:8000/api/getInstructorVerifiedSubTrack/${id}`,this.requestOptions);
}





}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubtrackServiceService {

  api_key=localStorage.getItem('token');

  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.api_key}`
  });
  requestOptions= { headers:this.headers };
  constructor(private httpClient:HttpClient) { }
  getSubtracks(id : any):Observable<any>{
    return this.httpClient.get('http://127.0.0.1:8000/api/allSubTracks' );
  }
}

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LandingService {
  sub: any;
  constructor(private httpClient: HttpClient) { }
  getTopInstructor(): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:8000/api/topTenInstructors`)
  }
}

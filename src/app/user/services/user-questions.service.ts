import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserQuestionsService {

  constructor(private httpClient:HttpClient) { }
  getUserQuestions(){
    return this.httpClient.get('')
  }
}

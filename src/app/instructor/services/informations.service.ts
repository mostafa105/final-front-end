import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InformationsService {

  constructor(private httpClient:HttpClient) { }



  api_key=localStorage.getItem('token');

  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.api_key}`
  });
  requestOptions= { headers:this.headers };
  // //////trak
  getTraks(): Observable<any> {
  return this.httpClient.get('http://127.0.0.1:8000/api/allTracks',this.requestOptions)
}
addSuperTrak(trak:object):Observable<any>{
  return this.httpClient.post('http://127.0.0.1:8000/api/addSuperTrackToInstructor',trak,this.requestOptions)
}

//add education 
  setEducation(formData:any ): Observable<any> {
  return this.httpClient.post('http://127.0.0.1:8000/api/storeInstructorEducation',formData  ,this.requestOptions);

}
//language
getLanguages(): Observable<any> {
  return this.httpClient.get('http://127.0.0.1:8000/api/languages',this.requestOptions)
}

getInstructorLanguage(id:number): Observable <any> {
  return this.httpClient.get(`http://127.0.0.1:8000/api/getInstructorLanguages/${id}`)
}
deleteInstructorLanguage(id:any):Observable<any>{
  return this.httpClient.delete(`http://127.0.0.1:8000/api/deleteLanguage/${id}` , this.requestOptions);
}
addLanguage(language:object):Observable<any>{
  return  this.httpClient.post(`http://127.0.0.1:8000/api/addLanguageToInstructor`,language,this.requestOptions)
}


//work history

addWorkHistory(company :object):Observable<any>{
  return  this.httpClient.post(`http://127.0.0.1:8000/api/storeInstructorWorkHistory`,company,this.requestOptions)
}

getWorkHistory():Observable<any>{
  return  this.httpClient.post(`http://127.0.0.1:8000/api/getInstructorWorkHistory`,this.requestOptions)
}

//certificate 
addCertificate(certificate:object):Observable<any>{
  return  this.httpClient.post(`http://127.0.0.1:8000/api/storeCertificate`,certificate,this.requestOptions)
}

deleteCertificate(id:number):Observable<any>{
  return  this.httpClient.post(`http://127.0.0.1:8000/api/delete/certificate/${id}`,this.requestOptions)
}



updateImg(img:object):Observable<any>{
  return  this.httpClient.post(`http://127.0.0.1:8000/api/user/store/image`,img,this.requestOptions)
}

getImg(instId:any):Observable<any>{
  return this.httpClient.get(`http://127.0.0.1:8000/api/user/show/image/${instId}`);
}


}

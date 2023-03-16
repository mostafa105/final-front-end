import { showfilter } from './../animation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'

})
export class UserHomeService {

  constructor(private HttpClient :HttpClient) { }
  api_key=localStorage.getItem('token');

headers = new HttpHeaders({
  'Accept': 'application/json',
  'Authorization': `Bearer ${this.api_key}`
});
requestOptions= { "headers":this.headers };

  addquestion(data:Object): Observable<any>{
  return  this.HttpClient.post('http://127.0.0.1:8000/api/questions/store',data , this.requestOptions);
  }

  addnewqcomment(body:string ,user_id:string,question_id:number): Observable<any>{
    return  this.HttpClient.post('http://127.0.0.1:8000/api/qcomments',{'qcomment_body':body,'instructor_id':user_id,'question_id':question_id} , this.requestOptions);

  }

  addnewreply(body:string ,user_id:string,qcomment_id:number): Observable<any>{
    return  this.HttpClient.post('http://127.0.0.1:8000/api/replies/store',{'reply_body':body,'user_id':user_id,'qcomment_id':qcomment_id}, this.requestOptions)
    ;
  }

  updatequestionbyid(id:string,body:string,subtrack_id:string): Observable<any>{
    return  this.HttpClient.put('http://127.0.0.1:8000/api/questions/update/'+id,{'question_body':body,'subtrack_id':subtrack_id}, this.requestOptions)
    ;
  }

  updateqcommentbyid(id:string,body:string): Observable<any>{
    return  this.HttpClient.put('http://127.0.0.1:8000/api/qcomments/'+id,{'qcomment_body':body ,}, this.requestOptions)
    ;
    }

  updatereplybyid(id:string,body:string): Observable<any>{
    return  this.HttpClient.put('http://127.0.0.1:8000/api/replies/update/'+id,{'reply_body':body ,}, this.requestOptions)
    ;
    }

    deletequestionbyid(question_id:string): Observable<any>{
      return this.HttpClient.delete('http://127.0.0.1:8000/api/questions/delete/'+question_id, this.requestOptions)
      ;
     }

     deleteqcommentbyid(qcommetn_id:string): Observable<any>{
      return this.HttpClient.delete('http://127.0.0.1:8000/api/qcomments/'+qcommetn_id, this.requestOptions)
      ;
     }

     deletereplybyid(reply_id:string): Observable<any>{
      return this.HttpClient.delete('http://127.0.0.1:8000/api/replies/delete/'+reply_id, this.requestOptions)
      ;
     }

  showquestion(): Observable<any>{
    return  this.HttpClient.get<any>('http://127.0.0.1:8000/api/questions');
  }

  getquestionbyuser(userid:any): Observable<any>{
    return this.HttpClient.get<any>(`http://127.0.0.1:8000/api/getquestionbyuser/${userid}` );
  }

  showquestionbyuser(user_id:string): Observable<any>{
    return  this.HttpClient.get<any>('http://127.0.0.1:8000/api/getquestionbyuser/'+user_id);
  }

  search(searchquestions:any): Observable<any>{
    return this.HttpClient.get<any>(`http://127.0.0.1:8000/api/searchquestions/${searchquestions}` );
  }
  


  showfilter(subtrack:string): Observable<any>{
    return  this.HttpClient.get<any>('http://127.0.0.1:8000/api/filterquestions/'+subtrack);
  }
  showcomment(): Observable<any>{
    return  this.HttpClient.get('http://127.0.0.1:8000/api/qcomments');
  }


  showreply(): Observable<any>{
    return  this.HttpClient.get('http://127.0.0.1:8000/api/replies');
  }


  showsubtrack(): Observable<any>{
    return  this.HttpClient.get('http://127.0.0.1:8000/api/subtracks');
  }

  setlike(comment_id:string,user_id:string): Observable<any>{
    return this.HttpClient.post('http://127.0.0.1:8000/api/likes',{'qcomment_id':comment_id ,'user_id':user_id }, this.requestOptions)

  }
  removelike(like_id:string): Observable<any>{
    return this.HttpClient.delete('http://127.0.0.1:8000/api/likes/like_id')
  }
}

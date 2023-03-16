import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { UserDataService } from 'src/app/services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient : HttpClient ){ }

  // id = this.userData.userData().id ;

api_key=localStorage.getItem('token');

headers = new HttpHeaders({
  'Accept': 'application/json',
  'Authorization': `Bearer ${this.api_key}`
});
requestOptions= { headers:this.headers };
//set post
  setPost(formData: any):Observable<any> {
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/storePost', formData , this.requestOptions)

  }

//get posts
getpostsbyinstrctorid(instructorId:any){
  return this.httpClient.get<any>(`http://127.0.0.1:8000/api/getpostsbyinstrctorid/${instructorId}` );
}

search(searchpost:any){
  return this.httpClient.get<any>(`http://127.0.0.1:8000/api/searchpost/${searchpost}` );
}

getPosts(){
  return this.httpClient.get<any>(`http://127.0.0.1:8000/api/posts` );
}


//delete post

deletePost(postId:any){
 return this.httpClient.delete<any>(`http://127.0.0.1:8000/api/deletePost/${postId}` , this.requestOptions);
 
}
//update post

updatePost(postId:any , body:any ){
  return this.httpClient.put<any>(`http://127.0.0.1:8000/api/updatePost/${postId}`  ,{'body':body} , this.requestOptions )
}

setcomment(postId:any , body:any ,user_id:any){
 console.log(postId+body +user_id );
  
  return this.httpClient.post<any>(`http://127.0.0.1:8000/api/addPostComment`  ,{'body':body,'post_id':postId ,'user_id':user_id} , this.requestOptions )
}

updatecomment(commentId:any , body:any){
  return this.httpClient.put<any>(`http://127.0.0.1:8000/api/update/comment/${commentId}`  ,{'body':body } , this.requestOptions )
}

deletecomment(commentId:any ){
  return this.httpClient.delete<any>(`http://127.0.0.1:8000/api/delete/comment/${commentId}` , this.requestOptions )
}
}
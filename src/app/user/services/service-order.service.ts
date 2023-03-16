import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataService } from 'src/app/services/user-data.service';


@Injectable({
  providedIn: 'root'
})
export class ServiceOrderService {

  api_key=localStorage.getItem('token');

  headers = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.api_key}`
  });
  requestOptions= { headers:this.headers };

  constructor(private _HttpClient : HttpClient , private userData :UserDataService) { }

  id = this.userData.userData().id;

  //get user orders/////////////////////////////////////////////////////////////
getUserOrder():Observable<any>{
  return this._HttpClient.get(`http://127.0.0.1:8000/api/show/user/order` , this.requestOptions)
}

////////////////////////////////////////////////////////////////////////////////////////////
//add order 
  setServiceOrder(formData:any):Observable<any>{
    return this._HttpClient.post('http://127.0.0.1:8000/api/orders/store' , formData ,this.requestOptions )
  }
///////////////////////////////////////////////////////////////////////////////////////////
//delete order
deleteOrder(orderId:any){
  return this._HttpClient.delete(`http://127.0.0.1:8000/api/orders/delete/${orderId}` , this.requestOptions)
  }

/////////////////////////////////////////////////////////////////////////////////////////////
//show user offers
showOffers(orderId:any):Observable<any>{
  return this._HttpClient.get(`http://127.0.0.1:8000/api/show/order/${orderId}` , this.requestOptions)
      
  }
  //////////////////////////////////////////////////
  //accept offer
  acceptOffer(offerId:any):Observable<any>{
    return this._HttpClient.get(`http://127.0.0.1:8000/api/accept/offer/${offerId}` ,this.requestOptions)
  }
  ////////////////////////////////////////////////////////
  //complete order
  CompleteOrder(id:any):Observable<any>{
    return this._HttpClient.get(`http://127.0.0.1:8000/api/complete/order/${id}` , this.requestOptions);
    
  }

}
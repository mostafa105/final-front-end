import { HttpClient  } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetServicesService {

  constructor(private _HttpClient :HttpClient) { }
  //get services
  getServices():Observable<any>{
   return this._HttpClient.get('http://127.0.0.1:8000/api/services' );
  }



//get tracks
getTracks():Observable<any>{
  return this._HttpClient.get('http://127.0.0.1:8000/api/allTracks');
}
}
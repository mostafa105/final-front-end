import { Injectable } from '@angular/core';
import Pusher from 'pusher-js/types/src/core/pusher';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
PusherKey :string ;
pusher : any;
  constructor() { 
    this.PusherKey = "220a16b4951657f7d612"
    // this.pusher = new Pusher(this.PusherKey)
  }
}

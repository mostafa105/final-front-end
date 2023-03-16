import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceOrderService } from '../services/service-order.service';

@Component({
  selector: 'app-service-notification',
  templateUrl: './service-notification.component.html',
  styleUrls: ['./service-notification.component.css']
})
export class ServiceNotificationComponent implements OnInit {
  
  offersList : any [] = [] ;
  offerMessage : string = " " ;
  id:any ;
  offerId: any;

  constructor(private orderService:ServiceOrderService , private activatedRoute : ActivatedRoute){}
  orderId = this.activatedRoute.snapshot.params["id"];
  ngOnInit(): void {
    this.getUserOffers();
    // this.acceptInstOffer(this.offerId);
  }
  getUserOffers(){
    this.orderService.showOffers(this.orderId).subscribe((res)=>{
      this.offersList = res.order.offers;
      
      this.offerMessage = "There is no offers "
      console.log(this.offersList);
      console.log(this.orderId);
      
      
    })
  }
 
  acceptInstOffer(offerId:any){
    this.orderService.acceptOffer(offerId).subscribe((res)=>{
      console.log(res);
      // console.log(this.offerId);
      
      
    })
  }

}

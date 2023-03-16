import { LandingService } from './landing.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  topTenInstructors :any;
  sub:any;
  
constructor(private _LandingService:LandingService){
  this.sub = _LandingService.getTopInstructor().subscribe(
    (response) =>
  this.topTenInstructors=response.data
    )
};
}

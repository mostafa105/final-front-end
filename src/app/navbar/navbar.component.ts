import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{
isLogin:any;
role:boolean=false;
    constructor(private authService:AuthService, private router:Router){}


ngOnInit(): void {
// this.authService.checkLogin.subscribe((res)=> this.isLogin= res)
console.log("ROLE")
console.log(this.authService.userRole.getValue())
// console.log(this.role)
this.authService.userToken.subscribe(()=>{
  if(this.authService.userToken.getValue() != null){
    this.isLogin=true;
  }else{
    this.isLogin=false;
  }
}
)
////
this.authService.userRole.subscribe(()=>{
  if(this.authService.userRole.getValue() == 2 ){
    this.role= true;
    console.log(this.authService.userRole.getValue())
console.log(this.role)
  }else if(this.authService.userRole.getValue() ==1){
    this.role= false;
    console.log(this.authService.userRole.getValue())
console.log(this.role)
  }
})
}
logout(){
// this.authService.checkLogin.next(false);
this.log();
this.authService.logout();

}


log(){
  this.authService.log().subscribe((response)=>{
    console.log(response)
  })
}

}
import { Component } from '@angular/core';
// import { DeviceDetectorService } from 'ngx-device-detector';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error: string = ''

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  

  })


constructor(private router:Router ,private authService:AuthService ,private userDataService:UserDataService){

}


   submitRegisterForm(loginForm:FormGroup){
  if(loginForm.valid){
  this.authService.login(this.loginForm.value).subscribe((response)=>{
    console.log(response);
    if(response.message == "success"){
   localStorage.setItem('token',response.token)
   localStorage.setItem('user',JSON.stringify(response.data))
  
     this.authService.token();
    this.userDataService.token();
    this.userDataService.userData()
     this.router.navigate(['/user/Questions'])
    }else{

this.error=response.message


    }
  })
  }
  }


}
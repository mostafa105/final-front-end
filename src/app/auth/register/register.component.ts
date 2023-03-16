import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import { AuthService } from '../auth.service';
import { CustomValidators } from '../custom-validators';
import { RoleService } from '../services/role.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string = ""
  private customValidators = new CustomValidators();
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    role_id: new FormControl(JSON.parse(localStorage.getItem('checkRole')||""), [Validators.required]),

    email: new FormControl(null, [Validators.required, Validators.email]),

    password: new FormControl(null, [Validators.required,Validators.minLength(8)]),
    password_confirmation: new FormControl(null, [Validators.required]),
  },

    { validators: this.customValidators.passwordMatch }

  )

  constructor(private authService: AuthService, private router: Router,private userDataService:UserDataService
    ,private roleService:RoleService) { }
  ngOnInit(): void {
console.log(localStorage.getItem('chekRole'))

  }

  submitRegisterForm(registerForm: FormGroup) {
    console.log(registerForm.value)

    if (registerForm.valid) {
      localStorage.setItem('chekRole','1');
      this.authService.register(registerForm.value).subscribe((response) => {
        // console.log(registerForm.value)
        console.log(response)
        if (response.message == "success") {
          //go to login
          console.log(response)
          localStorage.setItem('token', response.token)
          localStorage.setItem('user', JSON.stringify(response.data))
          this.authService.token();
          this.userDataService.token();
          this.userDataService.userData()
        
          this.router.navigate(['/home'])

          // this.router.navigate(['/login'])
        } else {
          console.log(response)
          this.error = response.message
        }

      }
      )

    }
  }
}
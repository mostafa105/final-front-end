import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BeforeRegisterComponent } from './before-register/before-register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    BeforeRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
LoginComponent,
RegisterComponent,
BeforeRegisterComponent
  ]
})
export class AuthModule { }

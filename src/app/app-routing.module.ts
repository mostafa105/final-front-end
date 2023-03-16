import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { AuthModule } from './auth/auth.module';
import { BeforeRegisterComponent } from './auth/before-register/before-register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthonGuard } from './authon.guard';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './instructor/post/post.component';
import { ProfileComponent } from './instructor/profile/profile.component';
import { JobComponent } from './jobs/job/job.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test/test.component';
import { AllUserOrdersComponent } from './user/all-user-orders/all-user-orders.component';
// import { PagerouteComponent } from './user/pageroute/pageroute.component';
import { ServiceDashboardComponent } from './user/service-dashboard/service-dashboard.component';
import { ServiceHomeComponent } from './user/service-home/service-home.component';
import { ServiceNotificationComponent } from './user/service-notification/service-notification.component';
// import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserComponent } from './user/user.component'
import { PostsComponent } from './user/userhome/posts/posts.component';
import { QuestionsviewComponent } from './user/userhome/questionsview/questionsview.component';
import { UserprofileComponent } from './user/userhome/userprofile/userprofile.component';

  const routes: Routes = [
{path:"test/:id",component:TestComponent},
  {path:'',redirectTo:"landingPage" , pathMatch:'full'},
  {path:"landingPage", component:LandingComponent},
  {path:"beforeReg", component:BeforeRegisterComponent},
  {path:"register", component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:'home', component: HomeComponent,canActivate:[AuthonGuard]},
  {path:'profile',component:ProfileComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'profile/:id',component:ProfileComponent},
 /////user routes ////////////////////////////////////////////////
  {path:"user",component:UserComponent , children:[
    // {path:"userHome",component: PagerouteComponent  },
    // {path:"userProfile",component: UserProfileComponent ,canActivate:[AuthonGuard] },
    {path:"service/home" , component: ServiceHomeComponent , canActivate:[AuthonGuard]},
    {path:"service/home/:id" , component: ServiceHomeComponent , canActivate:[AuthonGuard]},
    {path:"service/dashboard" , component: ServiceDashboardComponent ,canActivate:[AuthonGuard]},
    {path:"service/dashboard/:id" , component: ServiceDashboardComponent },
    {path:"service/notifications" , component: ServiceNotificationComponent ,canActivate:[AuthonGuard]},
    {path:"service/notifications/:id" , component: ServiceNotificationComponent ,canActivate:[AuthonGuard]},
    {path:"service/all-orders" , component: AllUserOrdersComponent ,canActivate:[AuthonGuard]},
    {path:"Student/Profile" , component: UserprofileComponent ,canActivate:[AuthonGuard]},
    {path:"Questions" , component: QuestionsviewComponent ,canActivate:[AuthonGuard]},
    {path:"Posts" , component: PostsComponent,canActivate:[AuthonGuard]},


  ]},
  //////jobs route///////////////////////////////////
  {path:"jobs" , component: JobComponent ,canActivate:[AuthonGuard]},
  {path:"jobs/:id" , component: JobComponent },
  {path:'landing',component:ProfileComponent},
  {path:"**",component:NotFoundComponent},

 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { PostsComponent } from './userhome/posts/posts.component';
import { QuestionsviewComponent } from './userhome/questionsview/questionsview.component';
import { UserprofileComponent } from './userhome/userprofile/userprofile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { UserInformationComponent } from './user-information/user-information.component';
// import { UserQuestionsComponent } from './user-questions/user-questions.component';
import { ServiceHomeComponent } from './service-home/service-home.component';
import { ServiceDashboardComponent } from './service-dashboard/service-dashboard.component';
import { ServiceResponceComponent } from './service-responce/service-responce.component';
import { ServiceNotificationComponent } from './service-notification/service-notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AllUserOrdersComponent } from './all-user-orders/all-user-orders.component';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TextareaautosizeDirective } from './textareaautosize.directive';
import { NgxPaginationModule } from 'ngx-pagination';
// import {UserprofileComponent} from './userhome/userprofile/userprofile.component'


@NgModule({
  declarations: [
    UserComponent,
    UserprofileComponent,
    QuestionsviewComponent,
    PostsComponent,
    
    // UserProfileComponent,
    // UserInformationComponent,
    // UserQuestionsComponent,
    ServiceHomeComponent,
    ServiceDashboardComponent,
    ServiceResponceComponent,
    ServiceNotificationComponent,
    AllUserOrdersComponent,
    TextareaautosizeDirective,
   
  ],
  imports: [
    CommonModule,
    RouterModule ,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    
  
  ],
  exports:[
    // UserProfileComponent,
    // UserComponent,
    ServiceHomeComponent
    
      ]
})
export class UserModule { }

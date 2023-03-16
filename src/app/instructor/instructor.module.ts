
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorRoutingModule } from './instructor-routing.module';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PostComponent } from './post/post.component';
import { InformationComponent } from './information/information.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
// ...
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertificateComponent } from './certificate/certificate.component';
import { TextareaautosizeDirective } from './textareaautosize.directive';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    TestimonialComponent,
    PostComponent,
    InformationComponent,
    ProfileComponent,
    CertificateComponent,
    TextareaautosizeDirective,
  ],
  imports: [
    CommonModule,
    InstructorRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule ,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
  ],
  exports:[
ProfileComponent,

  ]
})
export class InstructorModule { }

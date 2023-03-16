import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstructorModule } from './instructor/instructor.module';
import { HomeComponent } from './home/home.component';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { UserModule } from './user/user.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JobsModule } from './jobs/jobs.module';
import { ToastrModule } from 'ngx-toastr';
import { LandingComponent } from './landing/landing.component';
import { AboutSiteComponent } from './about-site/about-site.component';
import { TopRatedInstructorComponent } from './top-rated-instructor/top-rated-instructor.component';
import { TestModule } from './test/test.module';

// import { RouterModule } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    LandingComponent,
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    AboutSiteComponent,
    TopRatedInstructorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule ,
    HttpClientModule,
    InstructorModule,
    NgMultiSelectDropDownModule.forRoot(),
    UserModule,
    Ng2SearchPipeModule,
    FormsModule,
    JobsModule,
    ToastrModule.forRoot(), 
    TestModule
    

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

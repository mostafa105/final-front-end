import { Component ,OnInit} from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

instructorInfo:any;
posts:any;
testimonials:any
certificate:any;
constructor( private profileService:ProfileService,private userDataService:UserDataService){}


ngOnInit(): void {
 
  this.profileService.getProfile(this.userDataService.id()).subscribe((response)=>{
    console.log(response);
    this.posts=response.instructor.posts;
    this.testimonials=response.instructor.testimonials;
    this.certificate=response.instructor.certificates,
    this.instructorInfo=
      {
        name:response.instructor.name,
        major:response.instructor.major,
        skills:response.instructor.skills,
        language:response.instructor.language,
        education:response.instructor.education,
        trak:response.instructor.track,
        workHistory:response.instructor.workHistory,
        rate:response.instructor.rate,
        track:response.instructor.track,
        certificate:  response.instructor.certificates
       
      }

    
    console.log(this.certificate)
    // console.log(this.posts);
    // console.log(this.testimonials);
  }
  ,(error)=>{console.log(error)}
  
  
  )
  
}

}

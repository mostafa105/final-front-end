
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})


export class JobComponent implements OnInit {
  jobs:any[]=[];
ngOnInit(): void {
  this.getJob();
}

constructor( private jobService:JobService , private userDataService:UserDataService , 
  private activatedRoute : ActivatedRoute){}
//job id
jobId = this.activatedRoute.snapshot.params["id"];
// job applay
jobForm: FormGroup = new FormGroup({
  // instructor_id: new FormControl(this.userDataService.userData().id),
  price:new  FormControl(null,[Validators.required]),
  order_id:new FormControl(this.jobId)
  // cover_letter:new  FormControl(null,[Validators.required]),
});

jobApplay(jobForm:FormGroup){
  console.log(this.jobForm.value);
  
  if(jobForm.valid){
  this.jobService.applayJob(this.jobForm.value).subscribe((response)=>{ if(response){
    console.log(response.message);
  }
    
  
    
  })
}

}

//get all job



getJob(){

    this.jobService.getJobs().subscribe((response)=>{
    console.log(response);
    this.jobs = response.data;
    console.log(this.jobs);

    })

}





}

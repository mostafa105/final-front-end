import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InformationsService } from '../services/informations.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent  {
@Input() certificates:any;
constructor(private informationsService:InformationsService ){
  console.log("sss");
  console.log(this.certificates)
}
fileName:any;
message:string=''
formData=new FormData();
///////////////////certificate/////

certificateForm : FormGroup=new FormGroup({
  certificate:new FormControl('',[Validators.required]),
})


addCertificate( form:FormGroup){
  // console.log(form.value)
  

  this.informationsService.addCertificate(this.formData).subscribe((response)=>{
    console.log(response)
    this.message=response.message;

 
  },
  (error)=>{
    console.log(error)
  })


  
}


selectImg(event:any){
  this.formData.append('certificate',event.target.files[0])
}



deleteCertificate(id:any){   
  this.informationsService.deleteCertificate(id).subscribe((response)=>{
    console.log(response);
  })

}

  }












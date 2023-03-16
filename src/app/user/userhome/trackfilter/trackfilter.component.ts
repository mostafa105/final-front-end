import { UserHomeService } from './../../services/user-home.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { fade, showfilter } from '../../animation';

@Component({
  selector: 'app-trackfilter',
  templateUrl: './trackfilter.component.html',
  styleUrls: ['./trackfilter.component.css'],
  animations:[
    fade ,
    showfilter
  ]
})
export class TrackfilterComponent {
//   setwidth:string = "";
//   alighnfilter = "right";
//   alighntrack = 'right';
//   visible = 'false'
//   searchFilterTrack:string ='';
//   ser =""
  
//   subtracks : any ;
//   @Output() questions= new EventEmitter() ;



  

//   constructor(private service:UserHomeService){}
//   ngOnInit(): void {
//     this.showsubtracks();
    
//   }
//  search(search:Event){
//   let qusetuinsearch =(search?.target as HTMLInputElement)?.value ;
//   this.questions.emit(qusetuinsearch)
//  }
//   showfilter(value:Event){
//     let  subtrack_id =  (value?.target as HTMLInputElement)?.value ;
//     this.questions.emit(subtrack_id);
    
//     console.log(subtrack_id)
    

    // if(subtrack_id==undefined &&!switchs){
    //   this.questions.emit("no filter")
    // }else if(switchs){
    //   let qusetuinsearch =(value?.target as HTMLInputElement)?.value ;
    //   this.questions.emit(qusetuinsearch)
    //   setTimeout(() => {
    //     this.ser =""
    //   }, 10000); 

    // }
    // else{

    // }
   
  // }
  
  // showsubtracks(){
  //   this.service.showsubtrack().subscribe(res=>{this.subtracks =res})
    
  //  }

  // displaysearch(){
  //   if(this.setwidth==""){
      
  //     this.setwidth = "setwidth"
  //   }else{
  //     this.setwidth = ""
      
  //   };

  // }


  // setalighnfilter(id:Event){
  //   if(this.alighnfilter=="right"){

  //     this.alighnfilter = "down"
  //   }else{
  //     this.showfilter(id)
  //     this.alighnfilter = "right"
      
  //   };
    
  // }

  // viewtrack(){
  //   if(this.visible=="false"){
      
  //     this.visible = "true"
  //   }else{
  //     this.visible = "false"
      
  //   };
  // }

}
// function animmate(): import("@angular/animations").AnimationMetadata {
//   throw new Error('Function not implemented.');
// }
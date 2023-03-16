import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserHomeService } from '../../services/user-home.service';

@Component({
  selector: 'app-pageroute',
  templateUrl: './pageroute.component.html',
  styleUrls: ['./pageroute.component.css']
})
export class PagerouteComponent {
//   questionsData :any
// constructor(private service :UserHomeService){}

// showfilter(subtrack_id:string){
//   if(subtrack_id!="no filter" &&Number(subtrack_id)){
//     this.service.showfilter(subtrack_id).subscribe(res =>  { this.questionsData = res.data
//     console.log(this.questionsData)
    
//     }) 
//   }else if(!Number(subtrack_id)){
    
//     this.showwithoutfiltr();
//     this.search(subtrack_id)
//   } else{
//     this.showwithoutfiltr();
//   }
 
//  }
//  search(search:string){

//     setTimeout(() => {
//       let q = this.questionsData.data;
//       console.log(search)
//       console.log( this.questionsData)
//       this.questionsData.data=[];
//       for (const ques of q) {
//         if(ques.question_body.toLowerCase().includes(search)){
//           this.questionsData.data.push(ques)
//         }
//       }
//       console.log(this.questionsData.data)

//     }, 5000);

//  }

//  showwithoutfiltr(){

//    this.service.showquestion().subscribe(res =>  {  this.questionsData =res;}) ;
// }
 
}

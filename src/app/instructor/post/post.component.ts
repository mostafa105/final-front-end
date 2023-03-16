import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fade, showfilter, showaddquestion, fadein } from 'src/app/user/animation';
import { PostsService } from '../../user/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations: [fade, showfilter, showaddquestion, fadein],
})
export class PostComponent {

      // filter
      setwidth:string = "";
      alighnfilter = "right";
      alighntrack = 'right';
      visible = 'false'
      searchFilterTrack:string ='';
      ser =""
    
    
      // add Question
      success = false ;
      // user_id = '3'
      subtrack_name= "";
      subtracks : any ;
      public formAddQuestion!: FormGroup ;
      user_logend:any;

      // qutestionview
      list :any=[] ;
      textupdatequestion ="";
      bodyupdatequestion = "";
      bodynewqcomment:string[]=[];
      bodynewreply:string[]=[];
      textupdateqcomment="";
      textupdatereply="";
      bodyupdatereply="";
      bodyupdateqcomment = '';
      SQComments:string="";
      page: number = 1;
      count: number = 0;
      tableSize: number = 5;
      tableSizes: any = [3, 6, 9, 12];
    
      constructor(private service:PostsService ){}
      ngOnInit(){ 
        this.user_logend = localStorage.getItem('user');
        this.user_logend =JSON.parse(this.user_logend) 
        console.log(this.user_logend);
        this.formAddQuestion= this.AddQuestionValidate();
        this.refresh();
      }
    
      refresh(){
        this.getQuestion();
      }
    
      search(search:Event){
        let qusetuinsearch =(search?.target as HTMLInputElement)?.value ;
       }
  
      
        displaysearch(){
          if(this.setwidth==""){
            
            this.setwidth = "setwidth"
          }else{
            this.setwidth = ""
            
          };
      
        }
      
    
        removeformdata(){
          this.formAddQuestion= this.AddQuestionValidate();
        }
      
        private AddQuestionValidate():FormGroup {
          return new FormGroup({
            body: new FormControl('',[Validators.required,Validators.minLength(10)]),
            instructor_id:new FormControl(this.user_logend.id,[Validators.required])
          })
        }
      
         savequestion(){
          console.log(this.formAddQuestion.value)
          if(this.formAddQuestion.valid){
            console.log(this.formAddQuestion.value)
            this.service.setPost(this.formAddQuestion.value).subscribe(res=>{

            } )
            console.log(12)
            this.refresh();
            this.removeformdata()
          }

         }
      
      
    
  
         getQuestion(){
          console.log(this.user_logend.id)
          this.service.getpostsbyinstrctorid(this.user_logend.id).subscribe(res =>  { this.list = res.data
          console.log(this.list)
         }) ;
         console.log(this.list)
       
        }

        onTableDataChange(event: any) {
          this.page = event;
          this.getQuestion();
        }
        onTableSizeChange(event: any): void {
          this.tableSize = event.target.value;
          this.page = 1;
          this.getQuestion();
        }
    
  
    updatequestionbyid(id:string){
      this.service.updatePost(id,this.bodyupdatequestion).subscribe(res=>  { if(res){this.addupdatedtoquestions()} }) ;
      this.visibleupdatequestion('-1',"-1");
      this.bodyupdatequestion = ''
    }
    // to visible question update model
    visibleupdatequestion(question_id:string,body:string){
      this.bodyupdatequestion =body ;
      if(this.textupdatequestion){
        this.textupdatequestion = ''
      }else{
        this.textupdatequestion = question_id;
      }
    }
    
    // to add new update question in the page
    private addupdatedtoquestions(){
      
        this.refresh()
        this.bodyupdatequestion = "";
     }
      // q comment
    
    
      addnewqcomment(user_id:string,question_id:number){
        this.service.setcomment(question_id,this.bodynewqcomment[question_id],user_id)
        .subscribe(res =>{if(res){
          this.bodynewqcomment[question_id]="";
          this.refresh()
        }});
    
       }
    
    updateqcommentbyid(id:string){
      this.service.updatecomment(id,this.bodyupdateqcomment).subscribe(res=>  { if(res){this.refresh() }}) ;
      this.visiabletextupdateqcomment('-1',"-1");
      this.bodyupdateqcomment = ''
      
    }
    
  
     deletequestionbyid(question_id:string){
      if(confirm('Are You Sure To Delete This question?')){
        this.service.deletePost(question_id).subscribe(res =>  { this.refresh() }) ;
      }
     }
    
     deleteqcommentbyid(qcomment_id:string){
      if(confirm('Are You Sure To Delete This Comment?')){
        this.service.deletecomment(qcomment_id).subscribe(res =>  { this.refresh() }) ;
      }
    }
  
    getcomments(question_id: string) {
      console.log(question_id)
      if (question_id) {
        if (question_id == this.SQComments) {
          this.SQComments = "";
        } else {
          this.SQComments = question_id;
        }
      } else {
        this.SQComments = question_id;
      }
    }
    
      visiabletextupdateqcomment(qcomment_id:string, body: string){
  
        if(this.textupdateqcomment){
          this.textupdateqcomment = ''
        }else{
          this.textupdateqcomment = qcomment_id;
          this.bodyupdateqcomment =body;
        }
      }
    
       trackquetion(index: number, question:any): string {  
        return question.id;  
      } 
    
      trackqcomment(index: number, qcomment:any): string {  
        return qcomment.id;  
      } 

}

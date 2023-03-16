
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fade, showfilter, showaddquestion, fadein } from '../../animation';
import { PostsService } from '../../services/posts.service';
import { UserHomeService } from '../../services/user-home.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations: [fade, showfilter, showaddquestion, fadein],
})
export class PostsComponent {

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
    user_logend:any;

  
    constructor(private service :PostsService ){}
    ngOnInit(){
      this.user_logend = localStorage.getItem('user');
      this.user_logend =JSON.parse(this.user_logend) 
      this.refresh();
      this.formAddQuestion= this.AddQuestionValidate();
    }
  
    refresh(){
      this.getQuestion();
    }
  
    search(search:Event){
      let qusetuinsearch =(search?.target as HTMLInputElement)?.value ;
       this.service.search(qusetuinsearch).subscribe(res=>{
        this.list = res.data ; 
       })
     }
      displaysearch(){
        if(this.setwidth==""){
          
          this.setwidth = "setwidth"
        }else{
          this.setwidth = ""
          
        };
    
      }
    
      // endfilter
  
      // Addquestion
  
      removeformdata(){
        this.formAddQuestion= this.AddQuestionValidate();
      }
    
      private AddQuestionValidate():FormGroup {
        return new FormGroup({
          body: new FormControl('',[Validators.required,Validators.minLength(1)]),
          instructor_id:new FormControl(this.user_logend.id,[Validators.required])
        })
      }
    
       savequestion(){
        if(this.formAddQuestion.valid){
          this.service.setPost(this.formAddQuestion.value).subscribe(res=>{if(res){
            this.refresh();
            this.removeformdata()
          }} )

        }

       }

    
    getQuestion(){
      this.service.getPosts().subscribe(res =>  { this.list = res.data
      // console.log(this.list)
     }) ;
  
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

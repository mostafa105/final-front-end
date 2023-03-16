import { UserHomeService } from "./../../services/user-home.service";
import { Component, Input, Output } from "@angular/core";
import { HttpResponse } from "@angular/common/http";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { fade, showfilter, showaddquestion, fadein } from "../../animation";


@Component({
  selector: "app-questionsview",
  templateUrl: "./questionsview.component.html",
  styleUrls: ["./questionsview.component.css"],
  animations: [fade, showfilter, showaddquestion, fadein],
})
export class QuestionsviewComponent {
  // filter
  setwidth: string = "";
  alighnfilter = "right";
  alighntrack = "right";
  visible = "false";
  searchFilterTrack: string = "";
  ser = "";

  // add Question
  success = false;
  subtrack_name = "";
  subtracks: any;
  public formAddQuestion!: FormGroup;

  // qutestionview

  list: any = [];
  textupdatequestion = "";
  bodyupdatequestion = "";
  subtrack_id = "";
  bodynewqcomment: string[] = [];
  bodynewreply: string[] = [];
  textupdateqcomment = "";
  textupdatereply = "";
  bodyupdatereply = "";
  bodyupdateqcomment = "";
  SQComments: string = "";
  SQCReplies: string = "";
  user_logened :any
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service: UserHomeService) {}
  ngOnInit() {
    this.user_logened = localStorage.getItem("user")
    this.user_logened = JSON.parse(this.user_logened)
    this.showsubtracks();
    this.refresh();
    this.formAddQuestion = this.AddQuestionValidate();
  }

  refresh() {
    this.getQuestion();
  }

  search(search: Event) {
    let qusetuinsearch = (search?.target as HTMLInputElement)?.value;
    this.service.search(qusetuinsearch).subscribe(res=>{this.list = res.data})
  }

  like(comment_id:string, like_id:string,like_user_id:string){
    if(like_user_id==this.user_logened.id){
      this.service.removelike(like_id).subscribe(res=>{this.refresh()})
    }else{
      this.service.setlike(comment_id,this.user_logened.id).subscribe(res=>{this.refresh()})
    }
  }
  showfilter(value: Event) {
    let subtrack_id = (value?.target as HTMLInputElement)?.value;
    if (subtrack_id != undefined) {
      this.service.showfilter(subtrack_id).subscribe((res) => {
        this.list = res.data;
        console.log(this.list);
      });
      console.log(subtrack_id);
    } else {
      this.refresh();
    }
  }

  displaysearch() {
    if (this.setwidth == "") {
      this.setwidth = "setwidth";
    } else {
      this.setwidth = "";
    }
  }

  setalighnfilter(id: Event) {
    if (this.alighnfilter == "right") {
      this.alighnfilter = "down";
    } else {
      this.showfilter(id);
      this.alighnfilter = "right";
    }
  }

  viewtrack() {
    if (this.visible == "false") {
      this.visible = "true";
    } else {
      this.visible = "false";
    }
  }

  // endfilter

  // Addquestion

  private removeformdata() {
    this.formAddQuestion = this.AddQuestionValidate();
  }

  private AddQuestionValidate(): FormGroup {
    return new FormGroup({
      question_body: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      subtrack_id: new FormControl("", [Validators.required]),
      user_id: new FormControl("3", [Validators.required]),
    });
  }

  savequestion() {
    console.log(this.formAddQuestion.value);
    if (this.formAddQuestion.valid) {
      console.log(this.formAddQuestion.value);
      this.service.addquestion(this.formAddQuestion.value).subscribe((res) => {
        this.refresh();
        this.removeformdata();
      });
    }
 
  }

  // end add question

  // to get all question
  getQuestion() {
    this.service.showquestion().subscribe((res) => {
      this.list = res.data;
    });
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

  // to excute the question updateting in database
  updatequestionbyid(id: string) {
    this.service
      .updatequestionbyid(id, this.bodyupdatequestion, this.subtrack_id)
      .subscribe((res) => {
        if (res) {
          this.addupdatedtoquestions();
        }
      });
    this.visibleupdatequestion("-1", "-1", "-1", "-1");
  }

  // to visible question update model
  visibleupdatequestion(
    question_id: string,
    subtrackname: string,
    subtrackid: string,
    body: string
  ) {
    this.bodyupdatequestion = body;
    this.subtrack_id = subtrackid;
    this.subtrack_name = subtrackname;

    if (this.textupdatequestion) {
      this.textupdatequestion = "";
      this.bodyupdatequestion = "";
      this.subtrack_id = "";
      this.subtrack_name = "";
    } else {
      this.textupdatequestion = question_id;
    }
  }

  // to add new update question in the page
  private addupdatedtoquestions() {
    this.refresh();
    this.bodyupdatequestion = "";
    this.subtrack_id = "";
    this.subtrack_name = "";
  }
  // q comment

  addnewqcomment(user_id: string, question_id: number) {
    this.service
      .addnewqcomment(this.bodynewqcomment[question_id], user_id, question_id)
      .subscribe(res => {
          this.bodynewqcomment[question_id] = "";
          this.refresh();
      });
  }

  updateqcommentbyid(id: string) {
    this.service
      .updateqcommentbyid(id, this.bodyupdateqcomment)
      .subscribe((res) => {
        if (res) {
          this.addupdatedtoqcomment();
        }
      });
    this.visiabletextupdateqcomment("-1", "-1");
    this.bodyupdateqcomment = "";
    this.refresh();
  }

  updatereplybyid(id: string) {
    this.service.updatereplybyid(id, this.bodyupdatereply).subscribe((res) => {
      if (res) {
        this.addupdatedtoreply();
      }
    });
    this.visiabletextupdatereply("-1", " -1");
    this.bodyupdatereply = "";
  }
  deletequestionbyid(question_id: string) {
    if (confirm("Are You Sure To Delete This question?")) {
      this.service.deletequestionbyid(question_id).subscribe((res) => {
        this.refresh();
      });
    }
  }

  deleteqcommentbyid(qcomment_id: string) {
    if (confirm("Are You Sure To Delete This Comment?")) {
      this.service.deleteqcommentbyid(qcomment_id).subscribe((res) => {
        this.refresh();
      });
    }
  }
  deletereplybyid(reply_id: string) {
    if (confirm("Are You Sure To Delete This Reply?")) {
      this.service.deletereplybyid(reply_id).subscribe((res) => {
        this.refresh();
      });
    }
  }

  showsubtracks() {
    this.service.showsubtrack().subscribe((res) => {
      this.subtracks = res;
    });
  }

  addsubtrack(id: string, name: string) {
    this.subtrack_name = name;
    this.subtrack_id = id;
  }

  getcomments(question_id: string) {
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
  getrepleis(qcomment_id: string) {
    if (qcomment_id) {
      if (qcomment_id == this.SQCReplies) {
        this.SQCReplies = "";
      } else {
        this.SQCReplies = qcomment_id;
      }
    } else {
      this.SQCReplies = qcomment_id;
    }
  }

  addnewreply(user_id: string, comment_id: number) {
    this.service
      .addnewreply(this.bodynewreply[comment_id], user_id, comment_id)
      .subscribe((res) => {
        if (res) {
          console.log(res);
          this.bodynewreply[comment_id] = "";
          this.refresh();
        }
      });
  }

  visiabletextupdateqcomment(qcomment_id: string, body: string) {
    if (this.textupdateqcomment) {
      this.textupdateqcomment = "";
    } else {
      this.textupdateqcomment = qcomment_id;
      this.bodyupdateqcomment = body;
    }
  }

  visiabletextupdatereply(reply_id: string, body: string) {
    this.bodyupdatereply = body;

    if (this.textupdatereply) {
      this.textupdatereply = "";
    } else {
      this.textupdatereply = reply_id;
    }
  }

  addupdatedtoqcomment() {
    this.refresh();
    this.bodyupdatereply = "";
  }

  addupdatedtoreply() {
    this.refresh();
    this.bodyupdatereply = "";
  }

  trackquetion(index: number, question: any): string {
    return question.id;
  }

  trackqcomment(index: number, qcomment: any): string {
    return qcomment.id;
  }

  trackreply(index: number, reply: any): string {
    return reply.id;
  }
}

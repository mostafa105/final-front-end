import { Component, OnInit, Input,OnChanges, SimpleChanges } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";
import { InstructorModule } from "../instructor.module";
import { InformationsService } from "../services/informations.service";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { UserDataService } from "src/app/services/user-data.service";
import { ActivatedRoute, Router } from "@angular/router";
import { TestService } from "src/app/test/services/test.service";


@Component({
  selector: "app-information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.css"],
})
export class InformationComponent implements OnInit ,OnChanges{
  verifiedSubtracks:any;
  unVerifiedSubtracks:any;
  img: string = "";
  message: string = "";
  traks: any[] = [];
  languages: any[] = [];
  dropdownList: any[] = [{}];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: "id",
    textField: "name",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };
  @Input() instructorInfo: any;
  constructor(
    private informationsService: InformationsService,
    private userDataService: UserDataService,
    private testService:TestService,
    private activatedRoute : ActivatedRoute,
    private router:Router
  ) {

  
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.workHistoryForm = new FormGroup({
      workHistory: new FormControl(this.instructorInfo.workHistory??"", [Validators.required]),
    });

    this.educationForm =new FormGroup({
      faculty:new FormControl( this.instructorInfo.education??"",[Validators.required]),
      department:new FormControl(this.instructorInfo.education??"",[Validators.required])
      })
  }
 
  /////get all traks

  getTraks() {
    this.informationsService.getTraks().subscribe((response) => {
      this.traks = response.data;
      console.log(response.data);
      console.log(this.traks);
    });
  }

  /////get all language///////////////////////////////////////////

  instructorLanguage: any[] = [];

  dropdownListLanguage: any[] = [{}];
  selectedItemstLanguage: any = [];
  dropdownSettingstLanguage: IDropdownSettings = {
    singleSelection: false,
    idField: "id",
    textField: "name",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 9,
    allowSearchFilter: true,
  };

  getLanguage() {
    this.informationsService.getLanguages().subscribe((response) => {
      this.languages = response.languages;
      console.log(response);
      this.dropdownListLanguage = this.languages;
      console.log(this.dropdownListLanguage)
      this.dropdownSettingstLanguage = {
        singleSelection: false,
        idField: "id",
        textField: "name",
        selectAllText: "Select All",
        unSelectAllText: "UnSelect All",
        itemsShowLimit: 10,
        allowSearchFilter: true,
      };
    });
  }

  getInstructorLanguage() {
    this.informationsService.getInstructorLanguage(this.userDataService.id()).subscribe((response) => {
      console.log(response.languages);
    });
  }

  //////////////////////////////////////////////////////
  ngOnInit() {
    this.getTraks();
    this.getLanguage();
    this.getInstructorLanguage();
  this.getUnverifiedSubtracks();
  this.getUserImg();


    this.selectedItems = [
      // { item_id: 3, item_text: 'Pune' },
      // { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: "id",
      textField: "name",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 6,
      allowSearchFilter: true,
    };
    this.workHistoryForm = new FormGroup({
      workHistory: new FormControl(this.instructorInfo?.workHistory??"test", [Validators.required]),
    });
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  ///////trak///////////////////////

  majorForm: FormGroup = new FormGroup({
    superTrack_id: new FormControl(null, [Validators.required]),
  });

  addMajor(form: FormGroup) {
    // console.log(form.value)
    this.informationsService.addSuperTrak(form.value).subscribe((response) => {
      console.log(response);
      this.message = response.message;

      this.ngOnInit()
    });
  }

  updateMajor(form: FormGroup) {
    // console.log(form.value)
  }

  setTrak(){
    if(this.instructorInfo.workHistory!=null){
      this.majorForm.setValue({
        superTrack_id:"test"
      })
    }
  }
  /////////////////////////education/////////

  educationForm : FormGroup=new FormGroup({
    faculty:new FormControl(null,[Validators.required]),
    department:new FormControl(null,[Validators.required])
    })
    
    //education subscribtion 
    addEducation(educationForm:FormGroup){
      console.log(this.educationForm);
    
    if(educationForm.valid){
      this.informationsService.setEducation(this.educationForm.value ).subscribe(res=>{
      // this._Router.navigate(['/user/service/notifications']);
      console.log(res);
      
     })
    }
    
    }

  updateEducation(form: FormGroup) {
    console.log(form);
  }

  //////////////////language//////////

  languageForm: FormGroup = new FormGroup({
    language: new FormControl(null, [Validators.required]),
  });

  addLanguage(form: FormGroup) {
    // console.log(form.value.language);
    let language = form.value.language;
    let id = [];
    for (let i = 0; i < language.length; i++) {
      id.push(language[i].id);
    }
    console.log(id);
    language = { language_id: id };
    this.informationsService.addLanguage(language).subscribe((response) => {
      console.log(response);
      this.message = response.message;
    });
  }

  updateLanguage(form: FormGroup) {
    console.log(form);
  }
  //delete language

  deleteLanguage(){
    this.informationsService.deleteInstructorLanguage(this.userDataService.id()).subscribe((res)=>{
      
    })
  }

  ////////////////////about me

  aboutMeForm: FormGroup = new FormGroup({
    trak: new FormControl(null, [Validators.required]),
    subtrak: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  });

  addAboutMe(form: FormGroup) {
    console.log(form);
  }

  updateAboutMe(form: FormGroup) {
    console.log(form);
  }
  /////////////////work History

  workHistoryForm!: FormGroup ;

  addWorkHistory(form: FormGroup) {
    console.log(form.value);
    this.informationsService
      .addWorkHistory(form.value)
      .subscribe((response) => {
        console.log(response);
        this.message = response.message;
      });
  }

  updateWorkHistory(form: FormGroup) {
    // console.log(form)
  }

  ///////////////Image   /////////////////
  formData=new FormData();
  imgForm: FormGroup = new FormGroup({
    image: new FormControl(null, [Validators.required]),
  });
///update user img
  updateImg(form: FormGroup) {
    

  this.informationsService.updateImg(this.formData).subscribe((response)=>{
    console.log(response)
    this.message=response.message;
    this.getUserImg()
  },
  (error)=>{
    console.log(error)

  })
  }


  selectImg(event:any){
    this.formData.append('image',event.target.files[0])
  }
//get user img

getUserImg(){
  this.informationsService.getImg(this.userDataService.id()).subscribe((res)=>{
   this.img = res.image ;
   console.log(this.img);
  })
}
testForm: FormGroup = new FormGroup({
  subtrack_id: new FormControl(null, [Validators.required]),
});
startTest(testForm:FormGroup){

  if(testForm.valid){
  this.sendIdOfSubtrack(testForm.value.subtrack_id);
  console.log(testForm.value.subtrack_id)
  this.router.navigate(["/test",testForm.value.subtrack_id])
}
}
//test 

sendIdOfSubtrack(id:number){
  this.router.navigate(['./test',id])
  
}
//verifiedSubtracks
getVerifiedSubtracks(){
  this.testService.getVerifiedSubtracks(this.userDataService.id()).subscribe((response)=>{
console.log(response)
this.verifiedSubtracks = response.data;
  })
}

//unVerifiedSubtracks
getUnverifiedSubtracks(){
  this.testService.getUnverifiedSubtracks(this.userDataService.id()).subscribe((response)=>{
    console.log(response);
    this.unVerifiedSubtracks=response.data
  })
}


///delete certificate

deleteCertificate(id:any){  
  console.log(id)
  console.log("id.......") 
  this.informationsService.deleteCertificate(id).subscribe((response)=>{
    console.log(response);
  })

}



}
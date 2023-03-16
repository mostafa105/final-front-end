import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup  , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';
import { GetServicesService } from '../services/get-services.service';
import { ServiceOrderService } from '../services/service-order.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-service-home',
  templateUrl: './service-home.component.html',
  styleUrls: ['./service-home.component.css']
})
export class ServiceHomeComponent implements OnInit {

  id: string = "";
  serviceList: any[] = [];
 

  dropdownList :any[] = [];
  selectedItems :any= [];
  dropdownSettings:IDropdownSettings ={
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  }



 constructor(private _GetServices : GetServicesService ,
     private _ActivatedRoute : ActivatedRoute,
     private _Router:Router , 
     private _OrderService:ServiceOrderService
    ){}

    ngOnInit(): void {
      this.getServices();
      this.getTracks();
     
    }

dropdownListTrack :any[]  = []
       
      
      selectedItemsTrack :any [] = []
      
     dropdownSettingsTrack :IDropdownSettings= {
        singleSelection: false,
        idField: 'id',
        textField: 'name',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 1,
        allowSearchFilter: true
      };
    
getTracks(){
   this._GetServices.getTracks().subscribe((res)=>{
       this.dropdownListTrack = res.data ;
       console.log(this.dropdownListTrack);
       
    this.dropdownSettingsTrack ={
        singleSelection: false,
        idField: 'id',
        textField: 'name',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 1,
        allowSearchFilter: true
      }
    
   })
}
    
    onItemSelect(item: any) {
      console.log(item);
    }
   onSelectAll(items: any) {
      console.log(items);
    }


    //get all services

  getServices(){
    this._GetServices.getServices().subscribe((res)=>{
    console.log(res);
    this.serviceList = res.services ;
          
        })
      }

  //get user orders    
 


      serviceForm: FormGroup = new FormGroup({
        // user_id : new FormControl(this._UserData.userData().id) ,
        instructor_id: new FormControl(null),
        service_id: new FormControl(this._ActivatedRoute.snapshot.params["id"]),
        track_id: new FormControl(null, [Validators.required]),
        appointment: new FormControl(null),
        vedio_link: new FormControl(null),
        attachment: new FormControl(null),
        status: new FormControl(),
        evaluation: new FormControl(null),
        price: new FormControl(null),
    
      })

submitForm(serviceForm:FormGroup){
    console.log(this.serviceForm);

if(serviceForm.valid){
    this._OrderService.setServiceOrder(this.serviceForm.value).subscribe(res=>{
  
    console.log(res.message);
      

   })
  }
  
}



}
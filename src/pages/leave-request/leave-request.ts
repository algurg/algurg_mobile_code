import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';


import { ListPage } from '../../pages/list/list';

import { MessageComponent } from '../../components/message/message';

import { UserServiceProvider } from '../../providers/user-service/user-service';
import { LeaveServiceProvider } from '../../providers/leave-service/leave-service';

//import { DateValidator } from  '../../validators/date';
/**
 * Generated class for the LeaveRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave-request',
  templateUrl: 'leave-request.html',
})
export class LeaveRequestPage {
  
  leaveType:string;
  leaveTypes:any;
  startDate:string;
  endDate:string;
  reasonLeave:string;
  subject:string;
  message:string;
  authForm : FormGroup;
  alternateManagers: any;
  user:string;
  currentUser:any;
  isApplyRequest:boolean = true;
  todayStartDate:string;
  todayEndDate:string;

  constructor(public navCtrl: NavController,
    public navParams:NavParams,
    private leaveService:LeaveServiceProvider,
    private fb: FormBuilder,
    private toastCtrl: ToastController,
    private messageCtrl:MessageComponent,
    private userService: UserServiceProvider) {

    this.currentUser = this.userService.getCurrentUser();
      
    if(this.currentUser)
      this.user = this.currentUser.loginName;

      let endDate = new FormControl('',Validators.required);

      let startDate = new FormControl('', Validators.compose([Validators.required]));
      
      this.authForm = this.fb.group({
        'startDate' : startDate,
        'endDate' : endDate,
        'leaveContact': [null, Validators.compose([Validators.required])],
        'leaveReason': [null, Validators.compose([Validators.required])],
        'leaveType' : [null, Validators.compose([Validators.required])]
        //'alternateManager' :[null, Validators.compose([Validators.required])],
      }); 
      this.todayStartDate = new Date().toISOString();
      this.todayEndDate = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeaveRequestPage');
    this.getLeaveTypes();
    //this.getAlternateManager();
  }

  getLeaveTypes(){
    this.leaveService.leaveTypes().subscribe( data => {
      if (data) { 
          this.leaveTypes = data;
          console.log(this.leaveTypes);
      } else {    
        this.messageCtrl.showError("Access Denied");
      }
    },
      error => {
        this.messageCtrl.showError(error);
      });
  }
  getAlternateManager(){
    this.leaveService.alternateManagers(this.user).subscribe( data => {
      if (data) { 
          this.alternateManagers = data;
          console.log(this.alternateManagers);
      } else {    
        this.messageCtrl.showError("Access Denied");
      }
    },
      error => {
        console.log(error);
        this.messageCtrl.showError(error);
      });
  }

  submitForm(leaveRequest: any):void {

    this.messageCtrl.showLoading();

    //leaveRequest.alternateManager = leaveRequest.alternateManager.toString();

    //console.log(leaveRequest);

    this.leaveService.saveLeaveRequest(leaveRequest,this.user).subscribe( allowed => {
      if (allowed) { 
        this.messageCtrl.dismissLoading();       
        this.presentToast();
      } else {
        this.messageCtrl.showError("Access Denied");
      }
    },
      error => {
        this.messageCtrl.showError(error);
      });
  }	
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Leave request successfully submitted',
      duration: 2000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
     this.navCtrl.setRoot(ListPage);
    });
  
    toast.present();
  }
}

import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';

import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import { MessageComponent } from '../../components/message/message';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  user:string;
  name: string = '';
  number: string = '';
  company:string = '';
  department:string = '';
  job_title:string = '';
  engagement_date:string = '';
  nationality:string = '';
  manager:string = '';
  loginName:string= '';
  currentUser:any;
  employee:string;

  constructor(public navCtrl: NavController,
              public navParams:NavParams,
              private profileService:ProfileServiceProvider,
              private userService: UserServiceProvider,
              private messageCtrl: MessageComponent) {
                
        this.currentUser = this.userService.getCurrentUser();
                
        if(this.currentUser)
            this.user = this.currentUser.loginName;
  }
 
  ionViewDidEnter(){
    console.log(this.user);
    this.profile(this.user);
  }

   profile(user:string){
    //this.showLoading()
    this.profileService.profile(this.user).subscribe( data => {
      if (data) { 
        //this.loading.dismiss();       
        this.name = data[0].Name;
        this.number = data[0].Number;
        this.company = data[0].Company;
        this.department = data[0].Department;
        this.job_title = data[0].Job_Title;
        this.engagement_date = data[0].Engagement_Date;
        this.nationality = data[0].Nationality;
        this.manager = data[0].Manager;
        this.loginName = data[0].Login_Name;
        this.employee = data[0].Employee;
        //setting login user information...
        this.userService.setCurrentUser(this.loginName,this.name,
                                        this.employee,
                                        this.currentUser.encrypted);
        
      } else {    
        this.messageCtrl.showError("Access Denied");
      }
    },
      error => {
        this.messageCtrl.showError(error);
      });
   }
}

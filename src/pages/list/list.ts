import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InboxDetailPage } from '../../pages/inbox-detail/inbox-detail';

import { InboxServiceProvider } from '../../providers/inbox-service/inbox-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import { MessageComponent } from '../../components/message/message';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  user:string;
  currentUser:any;

  inboxItems: Array<{id:string,
                    type:string,
                    reqBy: string, 
                    description:string, 
                    reqDate: string, 
                    comments:string,
                    awaitingApproval:string,
                    canAction:boolean,
                    msgId:string,
                    status: string}>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private inboxService:InboxServiceProvider,
              private message:MessageComponent,
              private userService: UserServiceProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

    this.currentUser = this.userService.getCurrentUser();
    
        if(this.currentUser)
           this.user = this.currentUser.loginName;
   
    this.inboxItems = [];
  }
  ionViewDidEnter(){
    console.log(this.user);
    this.inbox();
  }
  inbox(){
    this.message.showLoading();
    this.inboxItems = [];
    this.inboxService.inbox(this.user).subscribe( data => {
      if (data) { 
        this.message.dismissLoading(); 
        console.log(data[0].Description);
        for (let i = 0; i < data.length; i++) {     
        this.inboxItems.push({
              id:data[i].Id,
              type:data[i].Type,
              reqBy: data[i].RequestedBy,
              description:data[i].Description,
              reqDate: data[i].RequestDate,
              comments : data[i].Comments,
              awaitingApproval:data[i].AwaitingApproval,
              canAction:data[i].CanAction,
              msgId : data[i].MsgId,
              status: data[i].Status
        }); 
      }
      } else {    
        this.message.showError("Access Denied");
      }
    },
      error => {
        this.message.showError(error);
      });
   }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(InboxDetailPage, {
      item: item
    });
  }
}

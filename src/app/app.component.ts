import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,Content } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { LeaveRequestPage } from '../pages/leave-request/leave-request';
import { PayrollListPage } from '../pages/payroll-list/payroll-list';
import { DocumentRequestPage } from '../pages/document-request/document-request';
import { DocumentListPage } from '../pages/document-list/document-list';

import { UserServiceProvider } from '../providers/user-service/user-service';
import { PIC_URL } from '../providers/config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Content) content: Content;
  
  currentUser:any;
  name:string;
  number:string;
  picture:string;

  rootPage: any = LoginPage;

  pages: Array<{title: string, icon:string,component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              private userService:UserServiceProvider) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', icon:'man', component: HomePage },
      { title: 'Leave Inbox',  icon:'mail',component: ListPage },
      { title: 'Leave Request', icon:'plane',component:LeaveRequestPage},
      { title: 'Document Inbox',icon:'ios-basket',component:DocumentListPage },
      { title: 'Document Request',icon:'ios-book',component:DocumentRequestPage },
      { title:'Payroll',icon:'ios-paper-plane',component:PayrollListPage},
      { title: 'Logout', icon:'md-close-circle',component: null}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component) {
      this.nav.setRoot(page.component);
    }
    else{
      this.nav.setRoot(LoginPage);
    }
  }
  menuOpened(){
    this.name = 'Guest';
    this.currentUser = this.userService.getCurrentUser();
    this.picture = "assets/person.jpg";

    if(this.currentUser){
      this.name = this.currentUser.userName;
      if(this.currentUser.number) {
        this.picture = PIC_URL + this.currentUser.number + ".jpg";
      }
    }
    this.nav.setRoot(this.nav.getActive().component);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}

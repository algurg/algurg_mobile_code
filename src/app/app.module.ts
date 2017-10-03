import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { LeaveRequestPage } from '../pages/leave-request/leave-request';
import { InboxDetailPage } from '../pages/inbox-detail/inbox-detail';
import { PayrollListPage } from '../pages/payroll-list/payroll-list';
import { PayrollDetailPage } from '../pages/payroll-detail/payroll-detail';
import { DocumentRequestPage } from '../pages/document-request/document-request';
import { DocumentListPage } from '../pages/document-list/document-list';
import { DocumentInboxDetailPage } from '../pages/document-inbox-detail/document-inbox-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { ProfileServiceProvider } from '../providers/profile-service/profile-service';
import { LeaveServiceProvider } from '../providers/leave-service/leave-service';
import { InboxServiceProvider } from '../providers/inbox-service/inbox-service';
import { PayrollServiceProvider } from '../providers/payroll-service/payroll-service';
import { UserServiceProvider } from '../providers/user-service/user-service';


import { MessageComponent } from '../components/message/message';
import { NavHeaderComponent } from '../components/nav-header/nav-header';
import { DocumentServiceProvider } from '../providers/document-service/document-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    LeaveRequestPage,
    InboxDetailPage,
    PayrollListPage,
    PayrollDetailPage,
    MessageComponent,
    NavHeaderComponent,
    DocumentRequestPage,
    DocumentListPage,
    DocumentInboxDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    LeaveRequestPage,
    InboxDetailPage,
    PayrollListPage,
    PayrollDetailPage,
    DocumentRequestPage,
    DocumentListPage,
    DocumentInboxDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServiceProvider,
    ProfileServiceProvider,
    LeaveServiceProvider,
    InboxServiceProvider,
    PayrollServiceProvider,
    UserServiceProvider,
    MessageComponent,
    DocumentServiceProvider
  ]
})
export class AppModule {}

import { Component } from '@angular/core';
import { NavController,IonicPage  } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';

import { MessageComponent } from '../../components/message/message';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  registerCredentials = { name: '', password: '',encrypted: '' };

  constructor(private nav: NavController,
    private loginService:LoginServiceProvider,
    private userService:UserServiceProvider,
    private message:MessageComponent) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    this.message.showLoading()

    let encryptedstr = this.registerCredentials.name + ':' +  this.registerCredentials.password;
    let encrypted = btoa(encryptedstr);
    
    this.registerCredentials.encrypted = encrypted
   
    this.loginService.login(this.registerCredentials).subscribe( allowed => {
      if (allowed) { 
        this.message.dismissLoading();
        //setting login name
        this.userService.setCurrentUser(this.registerCredentials.name,
                                        '',allowed,
                                        this.registerCredentials.encrypted);
        this.nav.setRoot(HomePage,{
          user:this.registerCredentials.name
        });
      } else {
        this.message.showError("Access Denied");
      }
    },
      error => {
        this.message.showError(error);
      });
  }
}

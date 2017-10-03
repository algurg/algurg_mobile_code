import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

import { BASE_URL } from '../../providers/config';
import { UserServiceProvider } from '../../providers/user-service/user-service';

export class Profile {
  name: string;
  number: string;
  company:string;
  department:string;
  job_title:string;
  engagment_date:string;
  nationality:string;
  manager:string;
  constructor() {
  }
}
/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProfileServiceProvider {

  currentUser:any;
  encrypted:string;

  constructor(public http: Http, private userService:UserServiceProvider,) {
    console.log('Hello ProfileServiceProvider Provider');

    this.currentUser = this.userService.getCurrentUser();

    if(this.currentUser)
      this.encrypted = this.currentUser.encrypted;
  }
  profile(user:string){
    
        if (user === null) {
          return Observable.throw("Please give user");
        } else {
          console.log(user);
         
            let headers = new Headers({
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + this.encrypted
            });
        
            let options = new RequestOptions({
              headers: headers
            });
        
            return this.http.get(BASE_URL + 'profile/' + user,options)
                .map(res =>  res.json());
        }
      }
}

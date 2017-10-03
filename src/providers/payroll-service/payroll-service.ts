import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { BASE_URL } from '../../providers/config';
import { UserServiceProvider } from '../../providers/user-service/user-service';
/*
  Generated class for the PayrollServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PayrollServiceProvider {

  currentUser:any;
  encrypted:string;
  
  constructor(public http: Http,private userService:UserServiceProvider) {
    console.log('Hello PayrollServiceProvider Provider');

        this.currentUser = this.userService.getCurrentUser();
    
        if(this.currentUser)
          this.encrypted = this.currentUser.encrypted;
  }
  payrollList(user:string){
    
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
        
            return this.http.get(BASE_URL + 'Payslips/' + user,options)
                .map(res =>  res.json());
        }
      }
      payrollDetail(user:string,interval:string){
        
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
            
                return this.http.get(BASE_URL + 'Payslips/' + user + '/' + interval ,options)
                    .map(res =>  res.json());
            }
          }
}

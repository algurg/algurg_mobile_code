import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

import { BASE_URL } from '../../providers/config';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/*
  Generated class for the DocumentServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DocumentServiceProvider {
  currentUser:any;
  encrypted:string;
  constructor(public http: Http,private userService:UserServiceProvider) {
    this.currentUser = this.userService.getCurrentUser();
    
        if(this.currentUser)
          this.encrypted = this.currentUser.encrypted;
  }
  documentTypes() {
    
          let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + this.encrypted
          });
      
          let options = new RequestOptions({
            headers: headers
          });
      
          return this.http.get(BASE_URL + 'DocumentTypes',options)
              .map(res =>  res.json());
      
    }
    saveDocumentRequest(documentRequest){
      
          if (documentRequest.documentType === null || documentRequest.language === null) {
            return Observable.throw("Please insert leave request");
          } else {
            console.log(documentRequest);
           
              let headers = new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.encrypted
              });
          
              let options = new RequestOptions({
                headers: headers
              });
              
              let body = JSON.stringify({
                Employee : this.currentUser.number,
                TypeOfApplication :  documentRequest.documentType,
                Comments : documentRequest.remark,
                BankName : documentRequest.bankName,
                Purpose : documentRequest.purpose,
                ReqNo : documentRequest.requestAddressTo,
                BANo : documentRequest.bankAccountNo,
                Statement : documentRequest.statement,
                Lang : documentRequest.language,
                User : this.currentUser.loginName
              });
          
              console.log(BASE_URL);
              
              return this.http.post(BASE_URL + 'DocumentRequests',body,options)
                  .map(res =>  res.json());
          }
        }
}

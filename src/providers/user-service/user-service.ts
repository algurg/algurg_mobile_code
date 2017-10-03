import { Injectable } from '@angular/core';

export class User {
  loginName: string;
  userName: string;
  number:string;
  encrypted:string;
 
  constructor(loginName:string,userName: string,number:string,encrypted:string) {
    this.loginName = loginName;
    this.userName = userName;
    this.number = number;
    this.encrypted = encrypted;
  }
}

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  
  currentUser:User;

  constructor() {
    console.log('Hello UserServiceProvider Provider');
  }
  setCurrentUser(loginName:string,userName:string,number:string,encrypted:string){
    this.currentUser = new User(loginName,userName,number,encrypted);
  }
  getCurrentUser() : User {
    return this.currentUser;
  }
}

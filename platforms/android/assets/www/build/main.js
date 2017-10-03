webpackJsonp([8],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InboxDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var InboxDetailPage = (function () {
    function InboxDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inbox = navParams.get('item');
    }
    InboxDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InboxDetailPage');
        console.log(this.inbox);
    };
    return InboxDetailPage;
}());
InboxDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-inbox-detail',template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\pages\inbox-detail\inbox-detail.html"*/'<!--\n  Generated template for the InboxDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n        <ion-title>\n          <img src="assets/logopayslip.png" class="header-img"/>\n         </ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only>\n            <ion-icon name="mail" color=\'secondary\'></ion-icon>\n          </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n             <h5>Type</h5>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n             {{inbox.type}}\n         </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <h5>Request By</h5>\n         </ion-col>\n        </ion-row>\n        <ion-row>\n         <ion-col>\n          {{inbox.reqBy}}\n         </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n           <h6>Leave Taken</h6>\n          </ion-col>\n         </ion-row>\n         <ion-row>\n          <ion-col>\n            {{inbox.description}}\n          </ion-col>\n         </ion-row>\n         <ion-row>\n          <ion-col>\n           <h5>Manager</h5>\n          </ion-col>\n         </ion-row>\n         <ion-row>\n          <ion-col>\n           {{inbox.awaitingApproval}}\n          </ion-col>\n         </ion-row>\n         <ion-row>\n          <ion-col>\n           <h5>Status</h5>\n          </ion-col>\n         </ion-row>\n         <ion-row>\n          <ion-col>\n            {{inbox.status}}\n          </ion-col>\n         </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\pages\inbox-detail\inbox-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], InboxDetailPage);

//# sourceMappingURL=inbox-detail.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message_message__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(nav, loginService, userService, message) {
        this.nav = nav;
        this.loginService = loginService;
        this.userService = userService;
        this.message = message;
        this.registerCredentials = { name: '', password: '', encrypted: '' };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.message.showLoading();
        var encryptedstr = this.registerCredentials.name + ':' + this.registerCredentials.password;
        var encrypted = btoa(encryptedstr);
        this.registerCredentials.encrypted = encrypted;
        this.loginService.login(this.registerCredentials).subscribe(function (allowed) {
            if (allowed) {
                _this.message.dismissLoading();
                //setting login name
                _this.userService.setCurrentUser(_this.registerCredentials.name, '', allowed, _this.registerCredentials.encrypted);
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */], {
                    user: _this.registerCredentials.name
                });
            }
            else {
                _this.message.showError("Access Denied");
            }
        }, function (error) {
            _this.message.showError(error);
            //console.log(error);
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\pages\login\login.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col class="logo-col">\n      <img src="assets/product_gulf_hr_01.png"/>\n    </ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Name" name="name" [(ngModel)]="registerCredentials.name" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n          <button ion-button class="register-btn" block clear (click)="createAccount()" style="display:none;">Create New Account</button>\n        </ion-col>\n      </ion-row>\n      \n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__["a" /* LoginServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__components_message_message__["a" /* MessageComponent */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var User = (function () {
    function User(loginName, userName, number, encrypted) {
        this.loginName = loginName;
        this.userName = userName;
        this.number = number;
        this.encrypted = encrypted;
    }
    return User;
}());

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var UserServiceProvider = (function () {
    function UserServiceProvider() {
        console.log('Hello UserServiceProvider Provider');
    }
    UserServiceProvider.prototype.setCurrentUser = function (loginName, userName, number, encrypted) {
        this.currentUser = new User(loginName, userName, number, encrypted);
    };
    UserServiceProvider.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    return UserServiceProvider;
}());
UserServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserServiceProvider);

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_message_message__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_leave_service_leave_service__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { DateValidator } from  '../../validators/date';
/**
 * Generated class for the LeaveRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LeaveRequestPage = (function () {
    function LeaveRequestPage(navCtrl, navParams, leaveService, fb, toastCtrl, messageCtrl, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.leaveService = leaveService;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.messageCtrl = messageCtrl;
        this.userService = userService;
        this.isApplyRequest = true;
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser)
            this.user = this.currentUser.loginName;
        var endDate = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required);
        var startDate = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]));
        this.authForm = this.fb.group({
            'startDate': startDate,
            'endDate': endDate,
            'leaveContact': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            'leaveReason': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            'leaveType': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])]
            //'alternateManager' :[null, Validators.compose([Validators.required])],
        });
        this.todayStartDate = new Date().toISOString();
        this.todayEndDate = new Date().toISOString();
    }
    LeaveRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaveRequestPage');
        this.getLeaveTypes();
        //this.getAlternateManager();
    };
    LeaveRequestPage.prototype.getLeaveTypes = function () {
        var _this = this;
        this.leaveService.leaveTypes().subscribe(function (data) {
            if (data) {
                _this.leaveTypes = data;
                console.log(_this.leaveTypes);
            }
            else {
                _this.messageCtrl.showError("Access Denied");
            }
        }, function (error) {
            _this.messageCtrl.showError(error);
        });
    };
    LeaveRequestPage.prototype.getAlternateManager = function () {
        var _this = this;
        this.leaveService.alternateManagers(this.user).subscribe(function (data) {
            if (data) {
                _this.alternateManagers = data;
                console.log(_this.alternateManagers);
            }
            else {
                _this.messageCtrl.showError("Access Denied");
            }
        }, function (error) {
            console.log(error);
            _this.messageCtrl.showError(error);
        });
    };
    LeaveRequestPage.prototype.submitForm = function (leaveRequest) {
        var _this = this;
        this.messageCtrl.showLoading();
        //leaveRequest.alternateManager = leaveRequest.alternateManager.toString();
        //console.log(leaveRequest);
        this.leaveService.saveLeaveRequest(leaveRequest, this.user).subscribe(function (allowed) {
            if (allowed) {
                _this.messageCtrl.dismissLoading();
                _this.presentToast();
            }
            else {
                _this.messageCtrl.showError("Access Denied");
            }
        }, function (error) {
            _this.messageCtrl.showError(error);
        });
    };
    LeaveRequestPage.prototype.presentToast = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Leave request successfully submitted',
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */]);
        });
        toast.present();
    };
    return LeaveRequestPage;
}());
LeaveRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-leave-request',template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\pages\leave-request\leave-request.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n            <img src="assets/logopayslip.png" class="header-img"/>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="plane" color=\'secondary\'></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    <form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value)">\n        <ion-item>\n            <ion-label>Leave Type</ion-label>\n            <ion-select [formControl]="authForm.controls[\'leaveType\']">\n                <ion-option *ngFor="let type of leaveTypes" [value]="type">{{type}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Start Date</ion-label>\n            <ion-datetime displayFormat="MMM DD, YYYY" \n            [(ngModel)]="todayStartDate"  [formControl]="authForm.controls[\'startDate\']"></ion-datetime>         \n        </ion-item>\n        \n        <ion-item>\n            <ion-label floating>End Date</ion-label>\n            <ion-datetime displayFormat="MMM DD, YYYY" \n            [(ngModel)]="todayEndDate" [formControl]="authForm.controls[\'endDate\']"></ion-datetime>         \n        </ion-item>\n       \n        <div class="error-box" *ngIf="authForm.controls[\'endDate\'].hasError(\'required\') && authForm.controls[\'endDate\'].touched">* End Date is required!</div>\n        <ion-item>\n            <ion-label floating>Leave Contact</ion-label>\n            <ion-input type="text" value="" [formControl]="authForm.controls[\'leaveContact\']" ></ion-input>\n        </ion-item>\n        <div class="error-box" *ngIf="authForm.controls[\'leaveContact\'].hasError(\'required\') && authForm.controls[\'leaveContact\'].touched">* Leave Contact is required!</div>\n    \n    <ion-item>\n        <ion-label floating>Leave Reason</ion-label>\n        <ion-input type="text" value="" [formControl]="authForm.controls[\'leaveReason\']" ></ion-input>\n    </ion-item>\n    <div class="error-box" *ngIf="authForm.controls[\'leaveReason\'].hasError(\'required\') && authForm.controls[\'leaveReason\'].touched">* Leave Reason is required!</div>\n    <br/>\n    <!--\n    <ion-item>\n    <ion-label>Alternate Manager</ion-label>\n    <ion-select [formControl]="authForm.controls[\'alternateManager\']">\n    <ion-option *ngFor="let manager of alternateManagers" [value]="manager.EmployeeId">{{manager.Name}}</ion-option>\n    </ion-select>\n    </ion-item>\n    -->\n    <br/>\n		<button type="submit" ion-button full [disabled]="!(authForm.valid && isApplyRequest)" class="submit-btn">Apply Leave</button>\n    </form>\n</ion-content>'/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\pages\leave-request\leave-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_leave_service_leave_service__["a" /* LeaveServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__components_message_message__["a" /* MessageComponent */],
        __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], LeaveRequestPage);

//# sourceMappingURL=leave-request.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayrollDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_payroll_service_payroll_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_message_message__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PayrollDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PayrollDetailPage = (function () {
    function PayrollDetailPage(navCtrl, navParams, payrollService, message, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.payrollService = payrollService;
        this.message = message;
        this.userService = userService;
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser)
            this.user = this.currentUser.loginName;
        this.payroll = navParams.get('item');
    }
    PayrollDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayrollDetailPage');
        console.log(this.payroll);
        this.payrollDetail();
    };
    PayrollDetailPage.prototype.payrollDetail = function () {
        var _this = this;
        this.message.showLoading();
        this.payrollService.payrollDetail(this.user, this.payroll.interval).subscribe(function (data) {
            if (data) {
                console.log(data.Interval);
                _this.interval = data.Interval;
                _this.employeeName = data.EmployeeName;
                _this.basicSalary = data.BasicSalary;
                _this.totalEarnings = data.TotalEarnings;
                _this.totalDeductions = data.TotalDeductions;
                _this.netPay = data.NetPay;
            }
            else {
                _this.message.showError("Access Denied");
            }
        }, function (error) {
            _this.message.showError(error);
        });
    };
    return PayrollDetailPage;
}());
PayrollDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payroll-detail',template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\pages\payroll-detail\payroll-detail.html"*/'<!--\n  Generated template for the PayrollDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n        <ion-title>\n            <img src="assets/logopayslip.png" class="header-img"/>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="ios-paper-plane" color=\'secondary\'></ion-icon>\n            </button>\n        </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n          <ion-col>\n             <h5>Interval</h5>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n               {{interval}}\n           </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <h5>Employee Name</h5>\n           </ion-col>\n          </ion-row>\n          <ion-row>\n           <ion-col>\n              {{employeeName}}\n           </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n             <h6>Basic Salary</h6>\n            </ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col>\n                {{basicSalary}}\n            </ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col>\n             <h5>Total Earnings</h5>\n            </ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col>\n                {{totalEarnings}}\n            </ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col>\n             <h5>Total Deductions</h5>\n            </ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col>\n                {{totalDeductions}}\n            </ion-col>\n           </ion-row>\n           <ion-row>\n              <ion-col>\n               <h5>Net Pay</h5>\n              </ion-col>\n             </ion-row>\n             <ion-row>\n              <ion-col>\n                  {{netPay}}\n              </ion-col>\n             </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\pages\payroll-detail\payroll-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_payroll_service_payroll_service__["a" /* PayrollServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__components_message_message__["a" /* MessageComponent */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], PayrollDetailPage);

//# sourceMappingURL=payroll-detail.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayrollListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_payroll_detail_payroll_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_payroll_service_payroll_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message_message__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PayrollListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PayrollListPage = (function () {
    function PayrollListPage(navCtrl, navParams, payrollService, message, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.payrollService = payrollService;
        this.message = message;
        this.userService = userService;
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser)
            this.user = this.currentUser.loginName;
        this.payrollItems = [];
    }
    PayrollListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayrollListPage');
        this.payroll();
    };
    PayrollListPage.prototype.payroll = function () {
        var _this = this;
        this.message.showLoading();
        this.payrollItems = [];
        this.payrollService.payrollList(this.user).subscribe(function (data) {
            if (data) {
                _this.message.dismissLoading();
                console.log(data[0].Interval);
                for (var i = 0; i < data.length; i++) {
                    _this.payrollItems.push({
                        interval: data[i].Interval,
                        intervalName: data[i].IntervalName
                    });
                }
            }
            else {
                _this.message.showError("Access Denied");
            }
        }, function (error) {
            _this.message.showError(error);
        });
    };
    PayrollListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_payroll_detail_payroll_detail__["a" /* PayrollDetailPage */], {
            item: item
        });
    };
    return PayrollListPage;
}());
PayrollListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payroll-list',template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\pages\payroll-list\payroll-list.html"*/'<!--\n  Generated template for the PayrollListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n          <img src="assets/logopayslip.png" class="header-img"/>\n      </ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only>\n            <ion-icon name="ios-paper-plane" color=\'secondary\'></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <button ion-item *ngFor="let item of payrollItems" (click)="itemTapped($event, item)">\n          {{ item.intervalName }}\n        </button>  \n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\pages\payroll-list\payroll-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_payroll_service_payroll_service__["a" /* PayrollServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__components_message_message__["a" /* MessageComponent */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], PayrollListPage);

//# sourceMappingURL=payroll-list.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentInboxDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DocumentInboxDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DocumentInboxDetailPage = (function () {
    function DocumentInboxDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inbox = navParams.get('item');
    }
    DocumentInboxDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentDetailPage');
        console.log(this.inbox);
    };
    return DocumentInboxDetailPage;
}());
DocumentInboxDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-document-inbox-detail',template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\pages\document-inbox-detail\document-inbox-detail.html"*/'<!--\n  Generated template for the InboxDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n          <ion-title>\n            <img src="assets/logopayslip.png" class="header-img"/>\n           </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="ios-basket" color=\'secondary\'></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n      <ion-grid>\n          <ion-row>\n            <ion-col>\n               <h5>Type</h5>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n               {{inbox.type}}\n           </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <h5>Request By</h5>\n           </ion-col>\n          </ion-row>\n          <ion-row>\n           <ion-col>\n            {{inbox.reqBy}}\n           </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n             <h6>Application Type</h6>\n            </ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col>\n              {{inbox.description}}\n            </ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col>\n             <h5>Manager</h5>\n            </ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col>\n             {{inbox.awaitingApproval}}\n            </ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col>\n             <h5>Status</h5>\n            </ion-col>\n           </ion-row>\n           <ion-row>\n            <ion-col>\n              {{inbox.status}}\n            </ion-col>\n           </ion-row>\n        </ion-grid>\n  </ion-content>\n  '/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\pages\document-inbox-detail\document-inbox-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], DocumentInboxDetailPage);

//# sourceMappingURL=document-inbox-detail.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_document_list_document_list__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_message_message__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_document_service_document_service__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the DocumentRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DocumentRequestPage = (function () {
    function DocumentRequestPage(navCtrl, navParams, documentService, fb, toastCtrl, messageCtrl, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.documentService = documentService;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.messageCtrl = messageCtrl;
        this.userService = userService;
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser)
            this.user = this.currentUser.loginName;
        this.authForm = this.fb.group({
            'documentType': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])],
            'requestAddressTo': [null, null],
            'purpose': [null, null],
            'bankName': [null, null],
            'bankAccountNo': [null, null],
            'statement': [null, null],
            'remark': [null, null],
            'language': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])]
        });
        this.languages = ['English', 'Arabic'];
    }
    DocumentRequestPage.prototype.getDocumentTypes = function () {
        var _this = this;
        this.documentService.documentTypes().subscribe(function (data) {
            if (data) {
                _this.documentTypes = data;
                console.log(_this.documentTypes);
            }
            else {
                _this.messageCtrl.showError("Access Denied");
            }
        }, function (error) {
            _this.messageCtrl.showError(error);
        });
    };
    DocumentRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentRequestPage');
        this.getDocumentTypes();
    };
    DocumentRequestPage.prototype.submitForm = function (documentRequest) {
        var _this = this;
        this.messageCtrl.showLoading();
        this.documentService.saveDocumentRequest(documentRequest).subscribe(function (allowed) {
            if (allowed) {
                _this.messageCtrl.dismissLoading();
                _this.presentToast();
            }
            else {
                _this.messageCtrl.showError("Access Denied");
            }
        }, function (error) {
            _this.messageCtrl.showError(error);
        });
    };
    DocumentRequestPage.prototype.presentToast = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Document request successfully submitted',
            duration: 2000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_document_list_document_list__["a" /* DocumentListPage */]);
        });
        toast.present();
    };
    return DocumentRequestPage;
}());
DocumentRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-document-request',template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\pages\document-request\document-request.html"*/'<!--\n  Generated template for the DocumentRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n            <img src="assets/logopayslip.png" class="header-img"/>\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n              <ion-icon name="ios-book" color=\'secondary\'></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n    <form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value)">\n        <ion-item>\n            <ion-label>Document Type</ion-label>\n            <ion-select [formControl]="authForm.controls[\'documentType\']">\n                <ion-option *ngFor="let type of documentTypes" [value]="type">{{type}}</ion-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Request Addressed To</ion-label>\n            <ion-input type="text" value="" [formControl]="authForm.controls[\'requestAddressTo\']" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Purpose (for salary statement)</ion-label>\n          <ion-input type="text" value="" [formControl]="authForm.controls[\'purpose\']" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Bank Name (for salary transfer letter)</ion-label>\n            <ion-input type="text" value="" [formControl]="authForm.controls[\'bankName\']" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Bank Account No (for salary transfer letter)</ion-label>\n            <ion-input type="text" value="" [formControl]="authForm.controls[\'bankAccountNo\']" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Particular statement to be mentioned in letter</ion-label>\n            <ion-input type="text" value="" [formControl]="authForm.controls[\'statement\']" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label floating>Remark</ion-label>\n            <ion-input type="text" value="" [formControl]="authForm.controls[\'remark\']" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Language</ion-label>\n            <ion-select [formControl]="authForm.controls[\'language\']">\n                <ion-option *ngFor="let lang of languages" [value]="lang">{{lang}}</ion-option>\n            </ion-select>\n            </ion-item>\n    <br/>\n		<button type="submit" ion-button full [disabled]="!authForm.valid" class="submit-btn">Apply Document</button>\n    </form>\n</ion-content>\n'/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\pages\document-request\document-request.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_document_service_document_service__["a" /* DocumentServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__components_message_message__["a" /* MessageComponent */],
        __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], DocumentRequestPage);

//# sourceMappingURL=document-request.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/document-inbox-detail/document-inbox-detail.module": [
		287,
		7
	],
	"../pages/document-list/document-list.module": [
		288,
		6
	],
	"../pages/document-request/document-request.module": [
		289,
		5
	],
	"../pages/inbox-detail/inbox-detail.module": [
		282,
		4
	],
	"../pages/leave-request/leave-request.module": [
		284,
		3
	],
	"../pages/login/login.module": [
		283,
		2
	],
	"../pages/payroll-detail/payroll-detail.module": [
		285,
		1
	],
	"../pages/payroll-list/payroll-list.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Profile */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Profile = (function () {
    function Profile() {
    }
    return Profile;
}());

/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ProfileServiceProvider = (function () {
    function ProfileServiceProvider(http, userService) {
        this.http = http;
        this.userService = userService;
        console.log('Hello ProfileServiceProvider Provider');
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser)
            this.encrypted = this.currentUser.encrypted;
    }
    ProfileServiceProvider.prototype.profile = function (user) {
        if (user === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Please give user");
        }
        else {
            console.log(user);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.encrypted
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            return this.http.get(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */] + 'profile/' + user, options)
                .map(function (res) { return res.json(); });
        }
    };
    return ProfileServiceProvider;
}());
ProfileServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], ProfileServiceProvider);

//# sourceMappingURL=profile-service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LoginServiceProvider = (function () {
    function LoginServiceProvider(http) {
        this.http = http;
        console.log('Hello LoginServiceProvider Provider');
    }
    LoginServiceProvider.prototype.login = function (credentials) {
        if (credentials.name === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            console.log(credentials);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + credentials.encrypted
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var body = JSON.stringify({
                DeviceToken: '6a39a7967390daab107899e53319f15106a73d3713bb5bfc18bf8e479e9b837d',
                DeviceType: 'iOS',
                LoginName: credentials.name,
                Password: credentials.password
            });
            return this.http.post(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */] + 'login', body, options)
                .map(function (res) { return res.json(); });
        }
    };
    return LoginServiceProvider;
}());
LoginServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], LoginServiceProvider);

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the LeaveServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LeaveServiceProvider = (function () {
    function LeaveServiceProvider(http, userService) {
        this.http = http;
        this.userService = userService;
        console.log('Hello LeaveServiceProvider Provider');
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser)
            this.encrypted = this.currentUser.encrypted;
    }
    LeaveServiceProvider.prototype.leaveTypes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + this.encrypted
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */] + 'LeaveTypes', options)
            .map(function (res) { return res.json(); });
    };
    LeaveServiceProvider.prototype.alternateManagers = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + this.encrypted
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */] + 'AlternateManagers/' + user, options)
            .map(function (res) { return res.json(); });
    };
    LeaveServiceProvider.prototype.saveLeaveRequest = function (leaveRequest, user) {
        if (leaveRequest.email === null || leaveRequest.password === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Please insert leave request");
        }
        else {
            console.log(leaveRequest);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.encrypted
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var body = JSON.stringify({
                LeaveType: leaveRequest.leaveType,
                SubstituteEmployeeId: this.currentUser.number,
                ApprovedTicket: 'True',
                LeaveContact: leaveRequest.leaveContact,
                StartDate: leaveRequest.startDate,
                EndDate: leaveRequest.endDate,
                ReasonForLeave: leaveRequest.leaveReason,
                ApprovedExitVisa: 'True',
                User: user
            });
            console.log(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */]);
            return this.http.post(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */] + 'LeaveRequests', body, options)
                .map(function (res) { return res.json(); });
        }
    };
    return LeaveServiceProvider;
}());
LeaveServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], LeaveServiceProvider);

//# sourceMappingURL=leave-service.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the DocumentServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DocumentServiceProvider = (function () {
    function DocumentServiceProvider(http, userService) {
        this.http = http;
        this.userService = userService;
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser)
            this.encrypted = this.currentUser.encrypted;
    }
    DocumentServiceProvider.prototype.documentTypes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + this.encrypted
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */] + 'DocumentTypes', options)
            .map(function (res) { return res.json(); });
    };
    DocumentServiceProvider.prototype.saveDocumentRequest = function (documentRequest) {
        if (documentRequest.documentType === null || documentRequest.language === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Please insert leave request");
        }
        else {
            console.log(documentRequest);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.encrypted
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            var body = JSON.stringify({
                Employee: this.currentUser.number,
                TypeOfApplication: documentRequest.documentType,
                Comments: documentRequest.remark,
                BankName: documentRequest.bankName,
                Purpose: documentRequest.purpose,
                ReqNo: documentRequest.requestAddressTo,
                BANo: documentRequest.bankAccountNo,
                Statement: documentRequest.statement,
                Lang: documentRequest.language,
                User: this.currentUser.loginName
            });
            console.log(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */]);
            return this.http.post(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */] + 'DocumentRequests', body, options)
                .map(function (res) { return res.json(); });
        }
    };
    return DocumentServiceProvider;
}());
DocumentServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], DocumentServiceProvider);

//# sourceMappingURL=document-service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MessageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var MessageComponent = (function () {
    function MessageComponent(loadingCtrl, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        console.log('Hello MessageComponent Component');
    }
    MessageComponent.prototype.showLoading = function () {
        if (!this.loading) {
            this.loading = this.loadingCtrl.create({
                content: 'Please wait...',
                dismissOnPageChange: true
            });
            this.loading.present();
        }
    };
    MessageComponent.prototype.dismissLoading = function () {
        if (this.loading)
            this.loading.dismiss();
        this.loading = null;
    };
    MessageComponent.prototype.showError = function (text) {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
        var message;
        message = text;
        if (text._body)
            message = text._body;
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'message',template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\components\message\message.html"*/'<!-- Generated template for the MessageComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\components\message\message.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MessageComponent);

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_leave_request_leave_request__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_inbox_detail_inbox_detail__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_payroll_list_payroll_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_payroll_detail_payroll_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_document_request_document_request__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_document_list_document_list__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_document_inbox_detail_document_inbox_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_login_service_login_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_profile_service_profile_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_leave_service_leave_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_inbox_service_inbox_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_payroll_service_payroll_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_user_service_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_message_message__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_nav_header_nav_header__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_document_service_document_service__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_leave_request_leave_request__["a" /* LeaveRequestPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_inbox_detail_inbox_detail__["a" /* InboxDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_payroll_list_payroll_list__["a" /* PayrollListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_payroll_detail_payroll_detail__["a" /* PayrollDetailPage */],
            __WEBPACK_IMPORTED_MODULE_23__components_message_message__["a" /* MessageComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_nav_header_nav_header__["a" /* NavHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_document_request_document_request__["a" /* DocumentRequestPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_document_list_document_list__["a" /* DocumentListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_document_inbox_detail_document_inbox_detail__["a" /* DocumentInboxDetailPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/inbox-detail/inbox-detail.module#InboxDetailPageModule', name: 'InboxDetailPage', segment: 'inbox-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/leave-request/leave-request.module#LeaveRequestPageModule', name: 'LeaveRequestPage', segment: 'leave-request', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payroll-detail/payroll-detail.module#PayrollDetailPageModule', name: 'PayrollDetailPage', segment: 'payroll-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payroll-list/payroll-list.module#PayrollListPageModule', name: 'PayrollListPage', segment: 'payroll-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/document-inbox-detail/document-inbox-detail.module#DocumentInboxDetailPageModule', name: 'DocumentInboxDetailPage', segment: 'document-inbox-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/document-list/document-list.module#DocumentListPageModule', name: 'DocumentListPage', segment: 'document-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/document-request/document-request.module#DocumentRequestPageModule', name: 'DocumentRequestPage', segment: 'document-request', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_leave_request_leave_request__["a" /* LeaveRequestPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_inbox_detail_inbox_detail__["a" /* InboxDetailPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_payroll_list_payroll_list__["a" /* PayrollListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_payroll_detail_payroll_detail__["a" /* PayrollDetailPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_document_request_document_request__["a" /* DocumentRequestPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_document_list_document_list__["a" /* DocumentListPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_document_inbox_detail_document_inbox_detail__["a" /* DocumentInboxDetailPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_login_service_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_profile_service_profile_service__["a" /* ProfileServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_leave_service_leave_service__["a" /* LeaveServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_inbox_service_inbox_service__["a" /* InboxServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_payroll_service_payroll_service__["a" /* PayrollServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_23__components_message_message__["a" /* MessageComponent */],
            __WEBPACK_IMPORTED_MODULE_25__providers_document_service_document_service__["a" /* DocumentServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_leave_request_leave_request__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_payroll_list_payroll_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_document_request_document_request__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_document_list_document_list__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_service_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_config__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, userService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.userService = userService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Profile', icon: 'man', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Leave Inbox', icon: 'mail', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Leave Request', icon: 'plane', component: __WEBPACK_IMPORTED_MODULE_7__pages_leave_request_leave_request__["a" /* LeaveRequestPage */] },
            { title: 'Document Inbox', icon: 'ios-basket', component: __WEBPACK_IMPORTED_MODULE_10__pages_document_list_document_list__["a" /* DocumentListPage */] },
            { title: 'Document Request', icon: 'ios-book', component: __WEBPACK_IMPORTED_MODULE_9__pages_document_request_document_request__["a" /* DocumentRequestPage */] },
            { title: 'Payroll', icon: 'ios-paper-plane', component: __WEBPACK_IMPORTED_MODULE_8__pages_payroll_list_payroll_list__["a" /* PayrollListPage */] },
            { title: 'Logout', icon: 'md-close-circle', component: null }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component) {
            this.nav.setRoot(page.component);
        }
        else {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
        }
    };
    MyApp.prototype.menuOpened = function () {
        this.name = 'Guest';
        this.currentUser = this.userService.getCurrentUser();
        this.picture = "assets/person.jpg";
        if (this.currentUser) {
            this.name = this.currentUser.userName;
            if (this.currentUser.number) {
                this.picture = __WEBPACK_IMPORTED_MODULE_12__providers_config__["b" /* PIC_URL */] + this.currentUser.number + ".jpg";
            }
        }
        this.nav.setRoot(this.nav.getActive().component);
    };
    MyApp.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], MyApp.prototype, "content", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\app\app.html"*/'<ion-menu [content]="content" (ionOpen)="menuOpened()">\n\n  <ion-content>\n      <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n      \n      <ion-card text-center class="hide-card">\n          <img [src]="picture" class="custom-avatar"/>\n          <h2>{{name}}</h2>\n      </ion-card>\n      <br/>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n              <ion-icon [name]="p.icon" color=\'secondary\' item-left></ion-icon>\n                {{ p.title }}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_11__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the NavHeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var NavHeaderComponent = (function () {
    function NavHeaderComponent() {
        console.log('Hello NavHeaderComponent Component');
        this.text = 'Hello World';
    }
    return NavHeaderComponent;
}());
NavHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'nav-header',template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\components\nav-header\nav-header.html"*/'<ion-title>\n    <img src="assets/logopayslip.png" class="title-img"/>\n   </ion-title>\n    <ion-buttons end>\n    <button ion-button icon-only>\n      <ion-icon name="mail" color=\'secondary\'></ion-icon>\n    </button>\n</ion-buttons>'/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\components\nav-header\nav-header.html"*/
    }),
    __metadata("design:paramtypes", [])
], NavHeaderComponent);

//# sourceMappingURL=nav-header.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PIC_URL; });
var BASE_URL = "http://42.201.137.116/999app.test.ops.ae/api/";
var PIC_URL = "http://42.201.137.116/999app.test.ops.ae/Photos/";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_document_inbox_detail_document_inbox_detail__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_inbox_service_inbox_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message_message__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DocumentListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DocumentListPage = (function () {
    function DocumentListPage(navCtrl, navParams, inboxService, message, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inboxService = inboxService;
        this.message = message;
        this.userService = userService;
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser)
            this.user = this.currentUser.loginName;
        this.inboxItems = [];
    }
    DocumentListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentListPage');
        this.inbox();
    };
    DocumentListPage.prototype.inbox = function () {
        var _this = this;
        this.message.showLoading();
        this.inboxItems = [];
        this.inboxService.documentInbox().subscribe(function (data) {
            if (data) {
                _this.message.dismissLoading();
                console.log(data[0].Description);
                for (var i = 0; i < data.length; i++) {
                    _this.inboxItems.push({
                        id: data[i].Id,
                        type: data[i].Type,
                        reqBy: data[i].RequestedBy,
                        description: data[i].Description,
                        reqDate: data[i].RequestDate,
                        comments: data[i].Comments,
                        awaitingApproval: data[i].AwaitingApproval,
                        canAction: data[i].CanAction,
                        msgId: data[i].MsgId,
                        status: data[i].Status
                    });
                }
            }
            else {
                _this.message.showError("Access Denied");
            }
        }, function (error) {
            _this.message.showError(error);
        });
    };
    DocumentListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_document_inbox_detail_document_inbox_detail__["a" /* DocumentInboxDetailPage */], {
            item: item
        });
    };
    return DocumentListPage;
}());
DocumentListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-document-list',template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\pages\document-list\document-list.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>\n          <img src="assets/logopayslip.png" class="header-img"/>\n      </ion-title>\n      <ion-buttons end>\n          <button ion-button icon-only>\n            <ion-icon name="ios-basket" color=\'secondary\'></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let item of inboxItems" (click)="itemTapped($event, item)">\n        <ion-icon name="ios-basket" color=\'secondary\' item-left></ion-icon>\n          <ion-grid>\n             <ion-row>\n               <ion-col><strong>Requested By:</strong></ion-col>\n               <ion-col>{{item.reqBy}}</ion-col>\n             </ion-row>\n             <ion-row>\n                <ion-col><strong>Req. Date:</strong></ion-col>\n                <ion-col>{{item.reqDate}}</ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col><strong>Status:</strong></ion-col>\n                  <ion-col>{{item.status}}</ion-col>\n                </ion-row>\n          </ion-grid>\n      </button>\n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\pages\document-list\document-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_inbox_service_inbox_service__["a" /* InboxServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__components_message_message__["a" /* MessageComponent */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], DocumentListPage);

//# sourceMappingURL=document-list.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_service_profile_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_message_message__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams, profileService, userService, messageCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileService = profileService;
        this.userService = userService;
        this.messageCtrl = messageCtrl;
        this.name = '';
        this.number = '';
        this.company = '';
        this.department = '';
        this.job_title = '';
        this.engagement_date = '';
        this.nationality = '';
        this.manager = '';
        this.loginName = '';
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser)
            this.user = this.currentUser.loginName;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        console.log(this.user);
        this.profile(this.user);
    };
    HomePage.prototype.profile = function (user) {
        var _this = this;
        //this.showLoading()
        this.profileService.profile(this.user).subscribe(function (data) {
            if (data) {
                //this.loading.dismiss();       
                _this.name = data[0].Name;
                _this.number = data[0].Number;
                _this.company = data[0].Company;
                _this.department = data[0].Department;
                _this.job_title = data[0].Job_Title;
                _this.engagement_date = data[0].Engagement_Date;
                _this.nationality = data[0].Nationality;
                _this.manager = data[0].Manager;
                _this.loginName = data[0].Login_Name;
                _this.employee = data[0].Employee;
                //setting login user information...
                _this.userService.setCurrentUser(_this.loginName, _this.name, _this.employee, _this.currentUser.encrypted);
            }
            else {
                _this.messageCtrl.showError("Access Denied");
            }
        }, function (error) {
            _this.messageCtrl.showError(error);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        <img src="assets/logopayslip.png" class="header-img"/>\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name="man" color=\'secondary\'></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n         <h5>Name</h5>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n         {{name}}\n     </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h5>Number</h5>\n     </ion-col>\n    </ion-row>\n    <ion-row>\n     <ion-col>\n      {{number}}\n     </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n       <h5>Company</h5>\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n        {{company}}\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n       <h5>Department</h5>\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n       {{department}}\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n       <h5>Job Title</h5>\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n        {{job_title}}\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n       <h5>Engagement Date</h5>\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n       {{engagement_date}}\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n       <h5>Nationality</h5>\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n        {{nationality}}\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n       <h5>Manager</h5>\n      </ion-col>\n     </ion-row>\n     <ion-row>\n      <ion-col>\n       {{manager}}\n      </ion-col>\n     </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_profile_service_profile_service__["a" /* ProfileServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__components_message_message__["a" /* MessageComponent */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_inbox_detail_inbox_detail__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_inbox_service_inbox_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message_message__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListPage = (function () {
    function ListPage(navCtrl, navParams, inboxService, message, userService) {
        // If we navigated to this page, we will have an item available as a nav param
        //this.selectedItem = navParams.get('item');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inboxService = inboxService;
        this.message = message;
        this.userService = userService;
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser)
            this.user = this.currentUser.loginName;
        this.inboxItems = [];
    }
    ListPage.prototype.ionViewDidEnter = function () {
        console.log(this.user);
        this.inbox();
    };
    ListPage.prototype.inbox = function () {
        var _this = this;
        this.message.showLoading();
        this.inboxItems = [];
        this.inboxService.inbox(this.user).subscribe(function (data) {
            if (data) {
                _this.message.dismissLoading();
                console.log(data[0].Description);
                for (var i = 0; i < data.length; i++) {
                    _this.inboxItems.push({
                        id: data[i].Id,
                        type: data[i].Type,
                        reqBy: data[i].RequestedBy,
                        description: data[i].Description,
                        reqDate: data[i].RequestDate,
                        comments: data[i].Comments,
                        awaitingApproval: data[i].AwaitingApproval,
                        canAction: data[i].CanAction,
                        msgId: data[i].MsgId,
                        status: data[i].Status
                    });
                }
            }
            else {
                _this.message.showError("Access Denied");
            }
        }, function (error) {
            _this.message.showError(error);
        });
    };
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_inbox_detail_inbox_detail__["a" /* InboxDetailPage */], {
            item: item
        });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"E:\Personal\Ionic_Projects\myApp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n        <img src="assets/logopayslip.png" class="header-img"/>\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only>\n          <ion-icon name="mail" color=\'secondary\'></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of inboxItems" (click)="itemTapped($event, item)">\n      <ion-icon name="mail" color=\'secondary\' item-left></ion-icon>\n        <ion-grid>\n           <ion-row>\n             <ion-col><strong>Requested By:</strong></ion-col>\n             <ion-col>{{item.reqBy}}</ion-col>\n           </ion-row>\n           <ion-row>\n              <ion-col><strong>Req. Date:</strong></ion-col>\n              <ion-col>{{item.reqDate}}</ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col><strong>Status:</strong></ion-col>\n                <ion-col>{{item.status}}</ion-col>\n              </ion-row>\n        </ion-grid>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\Personal\Ionic_Projects\myApp\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_inbox_service_inbox_service__["a" /* InboxServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__components_message_message__["a" /* MessageComponent */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the InboxServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var InboxServiceProvider = (function () {
    function InboxServiceProvider(http, userService) {
        this.http = http;
        this.userService = userService;
        console.log('Hello InboxServiceProvider Provider');
        this.currentUser = this.userService.getCurrentUser();
        /*
          if(this.currentUser)
            this.encrypted = this.currentUser.encrypted;
        */
    }
    InboxServiceProvider.prototype.inbox = function (user) {
        if (user === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Please give user");
        }
        else {
            console.log(user);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.currentUser.encrypted
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            return this.http.get(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */] + 'inbox/' + user, options)
                .map(function (res) { return res.json(); });
        }
    };
    InboxServiceProvider.prototype.documentInbox = function () {
        if (this.currentUser.loginName === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Please give user");
        }
        else {
            console.log(this.currentUser.loginName);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.currentUser.encrypted
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            return this.http.get(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */] + 'DocumentInbox/' + this.currentUser.loginName, options)
                .map(function (res) { return res.json(); });
        }
    };
    return InboxServiceProvider;
}());
InboxServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], InboxServiceProvider);

//# sourceMappingURL=inbox-service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayrollServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the PayrollServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var PayrollServiceProvider = (function () {
    function PayrollServiceProvider(http, userService) {
        this.http = http;
        this.userService = userService;
        console.log('Hello PayrollServiceProvider Provider');
        this.currentUser = this.userService.getCurrentUser();
        if (this.currentUser)
            this.encrypted = this.currentUser.encrypted;
    }
    PayrollServiceProvider.prototype.payrollList = function (user) {
        if (user === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Please give user");
        }
        else {
            console.log(user);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.encrypted
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            return this.http.get(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */] + 'Payslips/' + user, options)
                .map(function (res) { return res.json(); });
        }
    };
    PayrollServiceProvider.prototype.payrollDetail = function (user, interval) {
        if (user === null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw("Please give user");
        }
        else {
            console.log(user);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.encrypted
            });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
                headers: headers
            });
            return this.http.get(__WEBPACK_IMPORTED_MODULE_4__providers_config__["a" /* BASE_URL */] + 'Payslips/' + user + '/' + interval, options)
                .map(function (res) { return res.json(); });
        }
    };
    return PayrollServiceProvider;
}());
PayrollServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_user_service_user_service__["a" /* UserServiceProvider */]])
], PayrollServiceProvider);

//# sourceMappingURL=payroll-service.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map
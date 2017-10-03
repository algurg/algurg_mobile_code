import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

import { DocumentListPage } from '../../pages/document-list/document-list';

import { MessageComponent } from '../../components/message/message';

import { UserServiceProvider } from '../../providers/user-service/user-service';
import { DocumentServiceProvider } from '../../providers/document-service/document-service';

/**
 * Generated class for the DocumentRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-document-request',
  templateUrl: 'document-request.html',
})
export class DocumentRequestPage {

  documentTypes:any;
  authForm : FormGroup;
  languages: any;
  user:string;
  currentUser:any;

  constructor(public navCtrl: NavController,
    public navParams:NavParams,
    private documentService:DocumentServiceProvider,
    private fb: FormBuilder,
    private toastCtrl: ToastController,
    private messageCtrl:MessageComponent,
    private userService: UserServiceProvider) {
    this.currentUser = this.userService.getCurrentUser();
    
  if(this.currentUser)
    this.user = this.currentUser.loginName;
    
    this.authForm = this.fb.group({
      'documentType' : [null, Validators.compose([Validators.required])],
      'requestAddressTo' : [null, null],
      'purpose': [null, null],
      'bankName': [null, null],
      'bankAccountNo' :[null, null],
      'statement' :[null, null],
      'remark' :[null, null],
      'language' :[null, Validators.compose([Validators.required])]
    }); 
    this.languages = ['English','Arabic'];
  }
  
  getDocumentTypes(){
    this.documentService.documentTypes().subscribe( data => {
      if (data) { 
          this.documentTypes = data;
          console.log(this.documentTypes);
      } else {    
        this.messageCtrl.showError("Access Denied");
      }
    },
      error => {
        this.messageCtrl.showError(error);
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentRequestPage');
    this.getDocumentTypes();
  }
     submitForm(documentRequest: any):void {
    
      this.messageCtrl.showLoading();
      
          this.documentService.saveDocumentRequest(documentRequest).subscribe( allowed => {
            if (allowed) { 
              this.messageCtrl.dismissLoading();       
              this.presentToast();
            } else {
              this.messageCtrl.showError("Access Denied");
            }
          },
            error => {
              this.messageCtrl.showError(error);
            });
      }	
      presentToast() {
        let toast = this.toastCtrl.create({
          message: 'Document request successfully submitted',
          duration: 2000,
          position: 'bottom'
        });
      
        toast.onDidDismiss(() => {
         this.navCtrl.setRoot(DocumentListPage);
        });
      
        toast.present();
      }
}

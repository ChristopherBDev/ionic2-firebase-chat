import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../../providers/auth/auth.service';
import { HomePage } from './../home/home';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {

  signForm: FormGroup;

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
    
  ) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    
    let loading: Loading = this.showLoading();

    this.authService.signinWithEmail(this.signForm.value)
    .then((isLogged: boolean) => {
      if(isLogged) {
        this.navCtrl.setRoot(HomePage);
        loading.dismiss();
      }
    }).catch((error: any) => {
      console.log(error);
      loading.dismiss();
      this.showAlert(error);
    });
  }

  onSignUp(): void {
    this.navCtrl.push(SignupPage);
  }


  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    return loading;
  }

  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }

  onHomePage(): void {
    this.navCtrl.push(HomePage)
    .then((hasAcess: boolean) => {
      console.log('Autorizado: ', hasAcess);
    }).catch(err => {
      console.log('Não Autorizado:', err);
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
}

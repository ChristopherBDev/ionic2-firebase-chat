import { ChatPage } from './../chat/chat';
import { SignPage } from './../sign/sign';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2';

import { AuthService } from './../../providers/auth/auth.service';

import { SignupPage } from './../signup/signup';
import { User } from '../../../models/user.model';
import { UserService } from '../../providers/user/user.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: FirebaseListObservable<User[]>;
  view: string = "chats";
  
  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public userService: UserService) {

  }

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad() {
    this.users = this.userService.users;
  }

  onSignup(): void {
    this.navCtrl.push(SignupPage);
  }

  onChatCreate(user: User): void {
    this.navCtrl.push(ChatPage, {
      recipientUser: user
    });
  }

}

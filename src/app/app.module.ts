import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from './../pages/chat/chat';
import { SignupPage } from './../pages/signup/signup';
import { FirebaseAppConfig, AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { UserService } from '../providers/user/user.service';
import { AuthService } from '../providers/auth/auth.service';
import { SignPage } from '../pages/sign/sign';
import { CustomLoggedHeaderComponent } from '../components/custom-logged-header/custom-logged-header.component';
import { CaptalizePipe } from './../pipes/captalize/captalize.pipe';
import { ChatService } from '../providers/chat/chat.service';
import { MessageService } from '../providers/message/message.service';
import { MessageBoxComponent } from './../components/message-box/message-box.component';
import { UserInfoComponent } from './../components/user-info/user-info.component';
import { UserMenuComponent } from './../components/user-menu/user-menu.component';
import { UserProfilePage } from './../pages/user-profile/user-profile';
import { ProgressBarComponent } from './../components/progress-bar/progress-bar.component';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAMvAj5CJf7u9vY8CcTRpsZVyHGx_kUkAU",
  authDomain: "ionic2-firebase-chat-a8e8c.firebaseapp.com",
  databaseURL: "https://ionic2-firebase-chat-a8e8c.firebaseio.com",
  storageBucket: "ionic2-firebase-chat-a8e8c.appspot.com",
  messagingSenderId: "583404196031"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Custom,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    CaptalizePipe,
    ChatPage,
    CustomLoggedHeaderComponent,
    MyApp,
    HomePage,
    MessageBoxComponent,
    UserInfoComponent,
    ProgressBarComponent,
    UserMenuComponent,
    SignPage,
    SignupPage,
    UserProfilePage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChatPage,
    CustomLoggedHeaderComponent,
    MessageBoxComponent,
    UserInfoComponent,
    ProgressBarComponent,
    UserMenuComponent,
    MyApp,
    HomePage,
    SignPage,
    SignupPage,
    UserProfilePage,
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserService,
    ChatService,
    MessageService,
  ]
})
export class AppModule { }

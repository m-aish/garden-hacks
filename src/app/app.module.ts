import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import KEY from './../environments/config.js'
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainPageComponent} from './main-page/main-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import {AuthGuardService} from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'mainpage', component: MainPageComponent},
      {path: '**', component: LoginComponent}
    ]),
    BrowserAnimationsModule,
    SocialLoginModule,
    NgbModule,
    FormsModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(KEY)
        }
      ]
    } as SocialAuthServiceConfig,
  },
    //AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
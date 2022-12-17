import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SahiratoAuthRoutingModule } from './sahirato-auth-routing.module';
import { SahiratoAuthComponent } from './sahirato-auth.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [
    SahiratoAuthComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SahiratoAuthRoutingModule,
    HttpClientModule,

  ],
  exports: [
    SahiratoAuthComponent
  ]
})
export class SahiratoAuthModule { }

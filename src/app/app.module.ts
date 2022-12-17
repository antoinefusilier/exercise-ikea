import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

import { HttpClientModule } from '@angular/common/http';
import { SahiratoAuthModule } from 'sahirato-auth';


// https://angular.io/api/core/NgModule
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SahiratoAuthModule
  ],
  bootstrap: [
    AppComponent,
    // AuthComponent
  ],
  providers: [
    // AuthModule
  ]

})
export class AppModule { }

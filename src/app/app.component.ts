import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ikea';
  constructor(
    // private auth_DS: DetectService
    ){
    // console.log("Auth Detect Service: " + this.auth_DS);
  }
}

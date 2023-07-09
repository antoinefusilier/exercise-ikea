import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { Router } from '@angular/router';
import { SahiratoAuthService } from 'projects/sahirato-auth/src/public-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SahiratoAuthService]
})
export class AppComponent implements OnInit {
  title = 'ikea';
  constructor(
    // private auth_DS: DetectService
    private router: Router,
    private SAS: SahiratoAuthService
    ){

    // console.log("Auth Detect Service: " + this.auth_DS);
  }
  ngOnInit(): void {
    // this.router.navigate(['home']);
    // this.router.navigate([{ outlets: { testing: ['sign-in'] } }]);

    // this.router.navigate([{ outlets: { sahiratoAuth: ['sign-in'] } }]);
    let test = this.SAS.testServicesAuth();
    console.log('SAS TESTING RECEIVED::',test);
    // this.router.
  }
}

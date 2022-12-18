import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SahiratoAuthService } from './sahirato-auth.service';

@Component({
  selector: 'lib-sahirato-auth',
  template: `
    <div class="container">
      <button (click)="signInBtn()">Sing In</button>
      <button (click)="signUpBtn()">Sing Up</button>
    </div>
      <router-outlet name="auth"></router-outlet>

    <!-- https://angular.io/api/router/RouterLink -->


  `,
  styles: [
  ]
})
export class SahiratoAuthComponent implements OnInit {

  constructor(private router: Router, private SAS: SahiratoAuthService) {
    console.log('SahiratoAuthComponent constructor:: Redirection to sign-in component')
  }

  ngOnInit(): void {
    // this.router.navigate([{ outlets: { auth: ['sign-in'] } }]);
    // this.router.navigate(['admin']);
    // this.SAS.testingRedirectDashSignIn();
  }
  signInBtn = () => {
    this.SAS.testingRedirectDashSignIn();
  }
  signUpBtn = async() => {
    await this.router.navigate([{ outlets: { auth: ['sign-up'] } }]);
  }
  // testingRedirectDashSignIn = () => {
  //   this.router.navigate([{ outlets: { auth: ['sign-in'] } }]);
  // }
  // testingRedirectDashSignUn = async() => {
  //   await this.router.navigate([{ outlets: { auth: ['sign-up'] } }]);
  // }

}

import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'any'
})
export class SahiratoAuthService {

  constructor(private router: Router) {

  }

  testServicesAuth = () => {
    return 'testServicesAuth successfulled !';
  }
  testingRedirectDashSignIn = () => {
    this.router.navigate([{ outlets: { auth: ['sign-in'] } }]);
  }
  testingRedirectDashSignUn = async () => {
    await this.router.navigate([{ outlets: { auth: ['sign-up'] } }]);
  }
}

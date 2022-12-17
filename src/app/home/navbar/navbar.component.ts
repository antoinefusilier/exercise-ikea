import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sahiratoAuth = {
    signIn : [ '/',{
      outlets: {
        'sahirato-auth': ['auth'],
      }
  }]}

  auth = {
    signIn : {

    },
    account : {
      path: '/auth/account',

    },
    settings : {
      path: '/auth/settings',
    },
    disconnect : {
      path: '/auth/disconnect',
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

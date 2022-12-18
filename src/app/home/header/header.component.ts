import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sahiratoAuth = {
    signIn: ['/', {
      outlets: {
        'sahirato-auth': ['auth'],
      }
    }]
  }

  auth = {
    signIn: {

    },
    account: {
      path: '/auth/account',

    },
    settings: {
      path: '/auth/settings',
    },
    disconnect: {
      path: '/auth/disconnect',
    }
  }
  header = {
    name : 'Josh Atelier',
    logo: {
      path: 'assets/logo_ikea.png',
      alt: 'Logo Josh Atelier'
    },
    user: {
      icon: '<i class="bi bi-person-square"></i>'
    },
    pages : {
      home : {
        name: 'Accueil',
        path: 'home'
      },
      shop: {
        name: 'Boutique',
        path: 'shop'
      },
      contact: {
        name: 'Contact',
        path: 'contact'
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

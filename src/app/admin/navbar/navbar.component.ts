import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  home = {
    path: '/admin/home',
    active: '',
  }
  statistics = {
    path: '/admin/statistics',
    active: '',
  }
  orders = {
    path: '/admin/orders',
    active: '',
  }
  customers = {
    path: 'admin/customers',
    active: ''
  }
  products = {
    path: 'admin/products',
    active: ''
  }
  // homePath = 'admin';
  // statisticsPath = '/admin/statistics';
  // orderPath = '/admin/orders';
  // customerPath = '/admin/customers';
  // productPath = '/admin/products';


  constructor(private router: Router) {
    this.home.active = '';
    this.statistics.active = '';
    this.orders.active = '';
    this.customers.active = '';
    this.products.active = '';

    if(this.router.url == '/admin' || this.router.url == '/admin/home'){
      this.home.active = 'active';
    } else if (this.router.url == '/admin/statistics'){
      this.statistics.active = 'active';
    } else if (this.router.url == '/admin/orders'){
      this.orders.active = 'active';
    } else if (this.router.url == '/admin/customers'){
      this.customers.active = 'active';
    } else if (this.router.url == '/admin/products'){
      this.products.active = 'active';
    }

  }

  ngOnInit(): void {
  }

}

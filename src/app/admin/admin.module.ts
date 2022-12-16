import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RedirectComponent } from './redirect/redirect.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AdminComponent,
    StatisticsComponent,
    NavbarComponent,
    RedirectComponent,
    ProductsComponent,
    CustomersComponent,
    OrdersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

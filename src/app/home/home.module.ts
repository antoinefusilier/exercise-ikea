import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RealizationComponent } from './realization/realization.component';
import { RealizationPreviewComponent } from './realization/realization-preview/realization-preview.component';
import { HeaderComponent } from './header/header.component';
import { RealizationListComponent } from './realization/realization-list/realization-list.component';
import { RealizationRowComponent } from './realization/realization-row/realization-row.component';
import { ContactComponent } from './contact/contact.component';
import { ReceptionComponent } from './reception/reception.component';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './customer/cart/cart.component';
import { DeliveryComponent } from './customer/delivery/delivery.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { OrdersComponent } from './customer/orders/orders.component';
import { ReceptionSliderComponent } from './reception/reception-slider/reception-slider.component';
import { ReceptionLastRealizationsComponent } from './reception/reception-last-realizations/reception-last-realizations.component';
import { ReceptionAboutComponent } from './reception/reception-about/reception-about.component';
// import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    HomeComponent,
    RealizationComponent,
    RealizationPreviewComponent,
    HeaderComponent,
    RealizationListComponent,
    RealizationRowComponent,
    ContactComponent,
    ReceptionComponent,
    CustomerComponent,
    CartComponent,
    DeliveryComponent,
    PaymentComponent,
    OrdersComponent,
    ReceptionSliderComponent,
    ReceptionLastRealizationsComponent,
    ReceptionAboutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // AuthModule
  ]
})
export class HomeModule { }

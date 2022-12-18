import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home.component';
import { RealizationComponent } from './realization/realization.component';
import { ReceptionComponent } from './reception/reception.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: ReceptionComponent
      },{
        path: 'shop',
        component: RealizationComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'customer',
        component: CustomerComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

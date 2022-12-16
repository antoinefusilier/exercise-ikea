import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RealizationComponent } from './realization/realization.component';
import { SliderComponent } from './slider/slider.component';
import { RealizationPreviewComponent } from './realization-preview/realization-preview.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    RealizationComponent,
    SliderComponent,
    RealizationPreviewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

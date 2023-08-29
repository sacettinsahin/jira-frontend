import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


@NgModule({
  declarations: [LayoutComponent, HomepageComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
})
export class MainModule { }

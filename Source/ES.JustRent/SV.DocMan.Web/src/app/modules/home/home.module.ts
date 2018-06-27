import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SystemManagementModule } from '../system-management/system-management.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SystemManagementModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }

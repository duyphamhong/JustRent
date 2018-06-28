import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemManagementRoutingModule } from './system-management-routing.module';
import { DashboardComponent } from './components/dash-board/dash-board.component';
import { SystemManagemenetComponent } from './system-managemenet.component';
import { AppheaderComponent } from '../../components/appheader/appheader.component';
import { AppfooterComponent } from '../../components/appfooter/appfooter.component';
import { AppmenuComponent } from '../../components/appmenu/appmenu.component';
import { DatepickerComponent } from '../../components/datepicker/datepicker.component';
import { AppsettingComponent } from '../../components/appsetting/appsetting.component';
import { OrgnizationComponent } from './components/orgnization/orgnization.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  imports: [
    CommonModule,
    SystemManagementRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    SystemManagemenetComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    DatepickerComponent,
    AppsettingComponent,
    OrgnizationComponent
  ],
  exports: [
    CommonModule,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    MDBBootstrapModule,
    DatepickerComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SystemManagementModule { }

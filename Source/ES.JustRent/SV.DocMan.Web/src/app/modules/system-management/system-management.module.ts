import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemManagementRoutingModule } from './system-management-routing.module';
import { DashboardComponent } from './components/dash-board/dash-board.component';
import { SystemManagemenetComponent } from './system-managemenet.component';
import { AppheaderComponent } from '../../components/appheader/appheader.component';
import { AppfooterComponent } from '../../components/appfooter/appfooter.component';
import { AppmenuComponent } from '../../components/appmenu/appmenu.component';
import { AppsettingComponent } from '../../components/appsetting/appsetting.component';
import { OrgnizationComponent } from './components/orgnization/orgnization.component';

@NgModule({
  imports: [
    CommonModule,
    SystemManagementRoutingModule
  ],
  declarations: [
    DashboardComponent,
    SystemManagemenetComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingComponent,
    OrgnizationComponent
  ],
  exports: [
    CommonModule,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent
  ]
})
export class SystemManagementModule { }

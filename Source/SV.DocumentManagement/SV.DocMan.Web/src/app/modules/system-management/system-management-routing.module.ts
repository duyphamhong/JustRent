import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dash-board/dash-board.component';
import { SystemManagemenetComponent } from './system-managemenet.component';
import { OrgnizationComponent } from './components/orgnization/orgnization.component';

const routes: Routes = [
  {
    path: '',
    component: SystemManagemenetComponent,
    children:
      [
        { path: '', redirectTo: '/system/dash-board', pathMatch: 'full' },
        { path: 'system/dash-board', component: DashboardComponent },
        { path: 'system/organization', component: OrgnizationComponent }
      ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SystemManagementRoutingModule { }

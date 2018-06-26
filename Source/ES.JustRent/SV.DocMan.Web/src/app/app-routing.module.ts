import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginsModule } from './modules/logins/logins.module';
import { RoomsForRentModule } from './modules/rooms-for-rent/rooms-for-rent.module';
import { SystemManagementModule } from './modules/system-management/system-management.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'logins', loadChildren: () => LoginsModule },
  { path: 'roomforrent', loadChildren: () => RoomsForRentModule },
  { path: 'system-management', loadChildren: () => SystemManagementModule },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

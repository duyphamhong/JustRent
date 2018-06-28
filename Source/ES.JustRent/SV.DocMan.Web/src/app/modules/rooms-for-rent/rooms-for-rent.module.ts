import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { RoomsForRentRoutingModule } from './rooms-for-rent-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SystemManagementModule } from './../system-management/system-management.module';
import { CreateDetailComponent } from './components/create-detail/create-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule,
    RoomsForRentRoutingModule,
    SystemManagementModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CreateComponent, CreateDetailComponent],
  bootstrap: [CreateComponent],
  schemas : [NO_ERRORS_SCHEMA]
})
export class RoomsForRentModule { }

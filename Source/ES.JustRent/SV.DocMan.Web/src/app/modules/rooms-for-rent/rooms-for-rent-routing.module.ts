import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { CreateDetailComponent } from './components/create-detail/create-detail.component';
const routes: Routes = [
  {
    path: '', redirectTo: '/roomforrent', pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'create-detail',
    component: CreateDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsForRentRoutingModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent }      from './customer-detail/customer-detail.component';
import { OperatorDetailComponent }   from './operator-detail/operator-detail.component';



const routes: Routes = [
  { path: 'customer', component: CustomerDetailComponent }, 
  { path: 'operator', component: OperatorDetailComponent },
];

@NgModule({
  exports: [ RouterModule ], 
  imports : [RouterModule.forRoot(routes)]
})


export class AppRoutingModule {

}

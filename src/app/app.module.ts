import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { OperatorDetailComponent } from './operator-detail/operator-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerDetailComponent,
    OperatorDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

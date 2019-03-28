import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";
import { CustomerDetailService } from "../services/customer-detail.service"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customers: Customer[]

  initializeCustomers(): void {
    this.customerDetailService.getCustomerDetails().subscribe((customers) => this.customers = customers);
  }

  constructor(private customerDetailService: CustomerDetailService) { }

  ngOnInit() {
    this.initializeCustomers();
  }

}

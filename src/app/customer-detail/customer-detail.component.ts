import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";
import { CustomerDetailService } from "../services/customer-detail.service"

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customers: Customer[]

  initializeCustomers(): void {
    this.customerDetailService.getCustomerDetails().subscribe((customers) => this.customers = customers);
  }

  constructor(private customerDetailService: CustomerDetailService) { }

  ngOnInit() {
    this.initializeCustomers();
  }


}

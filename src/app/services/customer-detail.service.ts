import { Injectable } from '@angular/core';
import { Customer } from "../customer";
import { customers } from "../mock-customers";
import { Observable,of } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  getCustomerDetails() : Observable<Customer[]> {
    return of(customers);
  }

  constructor() { }
}

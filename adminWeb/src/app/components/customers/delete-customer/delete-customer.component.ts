import { Component, OnInit } from '@angular/core';
import { customer} from '../customer'
import { CustomerServicesService } from '../../../services/customerServices/customer-services.service'


@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  customer : customer = new customer(0,"","");  
  customer2 : customer = new customer(0,"","");  
  
  constructor(private _custsrv : CustomerServicesService) { }
  
  ngOnInit() {
  }

}

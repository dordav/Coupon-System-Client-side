import { Component, OnInit } from '@angular/core';
import { customer} from '../customer'
import { CustomerServicesService } from '../../../services/customerServices/customer-services.service'
@Component({
  selector: 'app-get-customer',
  templateUrl: './get-customer.component.html',
  styleUrls: ['./get-customer.component.css']
})
export class GetCustomerComponent implements OnInit {

  customer : customer = new customer(0,"","");
  company2 : customer = new customer(0,"","");
  constructor(private _custsrv : CustomerServicesService) { }


  

  ngOnInit() {}
  

}

import { Component, OnInit } from '@angular/core';
import { customer} from '../customer'
import { CustomerServicesService } from '../../../services/customerServices/customer-services.service'


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer : customer = new customer(0,"","");  
  customer2 : customer = new customer(0,"","");  

  constructor(private _custsrv : CustomerServicesService) { }
  


   /**
 * @ngdoc method
 * @name updatecust()
 * @param customer:customer
 * @description
 * This is method act as transfer station, it gets a customer
 *  and apply other method on the service , named "updatecustomer"
 **/
  updatecust(customer2:customer){
    this._custsrv.updatecustomer(this.customer2);
    this.customer2.name="";
    this.customer2.password='';
  }

  ngOnInit() {
  }

}

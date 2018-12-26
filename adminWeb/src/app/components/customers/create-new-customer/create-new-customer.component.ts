import { Component, OnInit } from '@angular/core';
import { CustomerServicesService } from '../../../services/customerServices/customer-services.service'
import { customer} from '../customer'


@Component({
  selector: 'app-create-new-customer',
  templateUrl: './create-new-customer.component.html',
  styleUrls: ['./create-new-customer.component.css']
})
export class CreateNewCustomerComponent implements OnInit {

  customer : customer = new customer(0,"","");  
  constructor(private _custsrv : CustomerServicesService) { }
  

   /**
 * @ngdoc method
 * @name newcust()
 * @param customer:customer
 * @description
 * This is method act as transfer station, it gets a customer
 *  and apply other method on the service , named "createcustomer" 
 **/
  newcust(){
    this._custsrv.createcustomer(this.customer );

  }


  ngOnInit() {
  }

}

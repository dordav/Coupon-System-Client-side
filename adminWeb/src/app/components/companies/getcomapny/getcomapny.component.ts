import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { company } from '../company';
import { CompanyServicesService } from '../../../services/companyServices/company-services.service'


@Component({
  selector: 'app-getcomapny',
  templateUrl: './getcomapny.component.html',
  styleUrls: ['./getcomapny.component.css']
})
export class GetcomapnyComponent implements OnInit {
  // show = false;
   company : company = new company(0,"","","");
   company2 : company = new company(0,"","","");
  constructor(private _companySer : CompanyServicesService ) {}
  
   /**
 * @ngdoc method
 * @name getserv()
 * @param id:number
 * @description
 * This is method act as transfer station, it gets an ID
 *  and apply other method on the service , named "getcompany" 
 **/
    getserv(id: number){
      this._companySer.getCompany(id);
    }
  

  ngOnInit() {  }
}



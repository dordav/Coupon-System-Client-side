import { Component, OnInit } from '@angular/core';
import { CompanyServicesService } from '../../../services/companyServices/company-services.service'
import { company } from '../company';


@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {
  company : company = new company(0,"","","");
  company2 : company = new company(0,"","","");
  

  constructor(private _companySer :CompanyServicesService) { }

  ngOnInit() {
  }
   /**
 * @ngdoc method
 * @name getserv()
 * @param id:number
 * @description
 * This method act as transfer station, it gets an ID
 *  and apply other method on the service , named "getcompany" 
 **/

  getserv(id: number){
    this._companySer.getCompany(id);
  }

}

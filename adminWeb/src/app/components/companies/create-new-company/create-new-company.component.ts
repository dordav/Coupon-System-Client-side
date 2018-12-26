import { Component, OnInit, ErrorHandler } from '@angular/core';
import { company } from '../company';
import { CompanyServicesService } from '../../../services/companyServices/company-services.service'

@Component({
  selector: 'app-create-new-company',
  templateUrl: './create-new-company.component.html',
  styleUrls: ['./create-new-company.component.css']
})
export class CreateNewCompanyComponent implements OnInit {
  

  constructor(private _companyservice : CompanyServicesService) { }

  company : company = new company(0,"","","");
 /**
 * @ngdoc method
 * @name newComp()
 * @param company:company
 * @description
 * This method act as transfer station, it gets a company
 *  and apply other method on the service , named "createcompany" 
 **/
  newComp(){
    this._companyservice.createcompany(this.company)
  }

  ngOnInit() {
  }

}

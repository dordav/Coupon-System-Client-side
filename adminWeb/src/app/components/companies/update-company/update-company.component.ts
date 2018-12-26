import { Component, OnInit } from '@angular/core';
import { company } from '../company';
import { CompanyServicesService } from '../../../services/companyServices/company-services.service'
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  // show = false;
    company : company = new company(0,"","","");
    company2 : company = new company(0,"","","");
  constructor(private _companySer :CompanyServicesService,private _activatedroute : ActivatedRoute)  { }

  id:number=0;
  show: boolean = false;

  
/**
 * @ngdoc method
 * @name getserv()
 * @param id:number
 * @description
 * This is method act as transfer station, it gets an ID
 *  and apply other method on the service , named "getcompany" 
 **/
  getserv(){
    this._companySer.getCompany(this.company.id);

  }



  ngOnInit() {
    this.id=this._activatedroute.snapshot.params['id'];
    console.log(this.id)
    if (this.id>0&&this.id!=null) {
      this._companySer.getCompany(this.id)
      this.company.id=this.id
      this.show=true;
      this.id=0;
    }
  }



}

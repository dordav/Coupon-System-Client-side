import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { company } from '../company';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyServicesService } from '../../../services/companyServices/company-services.service'


@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css'],

})
export class GetAllCompaniesComponent implements OnInit {

  /**
   * @ngdoc method
   * @name swalwarning()
   * @param err: any 
   * @description
   * This is method gets a err: any
   *  and display a specific alert accordingly
   **/
  swalwarning(err: any) {
    Swal({
      type: 'error',
      title: 'Oops...',
      text: err + '!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }
  constructor(private _http: Http,
    private _route: ActivatedRoute,
    private _router: Router,
    private _compserv: CompanyServicesService) {


    /**
     * @function http:Http.
     * @description
     * This function fire an "ajax" ("get"-method) over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response 
     * and put it into local array.
     **/
    this._http.get("http://localhost:8080/admin/getallcompanies").
      subscribe(
        (resp) => {
          this.companies = this.sortbyId(resp.json());
          this.companies2 = this.companies;
          console.log(resp)
        }, (err) => {
          console.log(err);
          this.swalwarning(err._body)
        }
      )
  }
  companies: company[];
  companies2: company[] = [];


  /**
 * @ngdoc method
 * @name sortbyId
 * @param company:company[] (Array)
 * @return The same array with sorted values
 */
  sortbyId(companies2: company[]) {
    return this.companies2 = companies2.sort((a, b) => {
      var x = a.id;
      var y = b.id;
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0
    })
  }

  /**
* @ngdoc method
* @name gettoupdate()
* @param i:number (index)
* @description
* This method gets param i:index and put it in local member.
* navigate to other component and pass the local member value.
**/
  gettoupdate(i: number) {

    let x: company = this.companies2[i];
    this._router.navigate(["updatecompany", x.id], { relativeTo: this._route });
    this._compserv.company2.id = x.id;

  }

  ngOnInit() {
  }
}
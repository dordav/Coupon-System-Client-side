import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { customer } from '../customer'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent implements OnInit {

   /**
 * @ngdoc method
 * @name swalwarning()
 * @param err:any
 * @description
 * This is method gets an error description, and display it on screen as an alert.
 * This method is doing use with "sweetalert2".
 **/
  swalwarning(err: any) {
    Swal({
      type: 'error',
      title: 'Oops...',
      text: err + '!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }
  
  constructor(private _http:Http ) { 

/**
 * @function http:Http.
 * @description
 * This function fire an "ajax" ("get"-method) over Http protocol.
 * Then by async (Observable) method named "subscribe" catch  the response 
 * and put it into local array.
 **/
    this._http.get("http://localhost:8080/admin/getallcustomers").
    subscribe(
      (resp ) =>
      {
        this.customers = resp.json();
        console.log(resp)
      }, (err) => {
        console.log(err);
        this.swalwarning(err._body)
      }
    )       
  }

  customers : customer[] ;
  ngOnInit() {
  }

}

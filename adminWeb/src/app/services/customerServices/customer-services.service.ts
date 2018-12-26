import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { customer } from '../../components/customers/customer'
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService {
  public customer: customer = new customer;
  public customer2: customer = new customer;

  constructor(private _http: Http) { }

  /**
 * @ngdoc method
 * @name initcust()
 * @description
 * This method initial attributes of cutsomer object
**/
  initcust() {
    this.customer.name = "";
    this.customer.password = "";
    this.customer2.name = "";
    this.customer2.password = "";
  }


  /**
   * @ngdoc method
   * @name swalwarning()
   * @param err: any 
   * @description
   * This method gets a err: any
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


  /**
   * @ngdoc Async method
   * @name createcustomer()
   * @param company:company
   * @description
   * This method gets an object of customer and by fire an "ajax" ("post"-method),
   * sends the object over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response.
  **/
  createcustomer(customer: customer) {
    this._http.post("http://localhost:8080/admin/createcustomer",
      customer).
      subscribe(
        // handle with the returned result
        (resp) => {
          // what to do with the result?
          console.log(resp)
          this.swalDone("Created!", "Company by name: " + customer.name + " created!")

        }, (err) => {
          console.log(err);
          this.swalwarning(err._body)
        }
      )
    this.initcust();
  }

  /**
 * @ngdoc Async method
 * @name getcustomer()
 * @param id:number
 * @description
 * This method gets ID (number)  and by fire an "ajax" ("get"-method),
 * sends the ID over Http protocol.
 * Then by async (Observable) method named "subscribe" catch  the response 
 * and put it into local object.
 **/
  getcustomer(id: number) {
    if (!(id > 0)) {
      this.swalwarning("Wrong ID")

    } else {
      this._http.get("http://localhost:8080/admin/getcustomer/" + id).
        subscribe(
          // handle with the returned result
          (resp) => {
            this.customer = resp.json();

            // what to do with the result?
            console.log(resp);
            this.swalDone("", "")
            // fire ajax GET
          }, (err) => {
            console.log(err);
            this.swalwarning(err._body);
          }
        )
    }
  }


  /**
 * @ngdoc Async method
 * @name updatecustomer()
 * @param customer:cutomer
 * @description
 * This method gets an object of cutomer object and by fire an "ajax" ("put"-method),
 * sends the object over Http protocol.
 * Then by async (Observable) method named "subscribe" catch  the response.
 **/
  updatecustomer(customer2: customer) {
    // fire ajax PUT
    this._http.put("http://localhost:8080/admin/updatecustomer",
      customer2).
      subscribe(
        // handle with the returned result
        (resp) => {
          // what to do with the result?
          console.log(resp)
          this.swalDone("Updated", "customer " + this.customer2.name + " updateded")

        }, (err) => {
          console.log(err);
          this.swalwarning(err._body);
        }
      )
    this.initcust();
  }


  /**
 * @ngdoc Async method
 * @name deletecustomer()
 * @param id:number
 * @description
 * This method gets an ID (number) and by fire an "ajax" ("delete"-method),
 * sends the ID over Http protocol.
 * Then by async (Observable) method named "subscribe" catch  the response.
 **/
  deletecustomer(id: number) {

    this._http.delete("http://localhost:8080/admin/removecustomer/" + id).
      subscribe(
        // handle with the returned result
        (resp) => {
          // what to do with the result?
          console.log(resp)
          this.swalDone("", "")
        }, (err) => {
          console.log(err);
          this.swalwarning(err._body);
        }
      )
    this.initcust();
  }

  /**
 * @ngdoc method
 * @name swalDel()
 * @param id: number
 * @description
 * This method gets a id: number
 *  and display a boolean question to the user.
 * according to the answer this method will invoke a deletecustomer() method.
 **/
  swalDel(id: number) {
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal(
          'Deleted!',
        )
        this.deletecustomer(id)
      }
    })
  }

  /**
* @ngdoc method
* @name swalDone()
* @param title: string 
* @param text : string
* @description
* This method gets a  title: string & text : string
*  and dispaly a specific alert accordingly
**/
  swalDone(title: string, text: string) {
    if (title.length == 0) {
      Swal({
        title: 'done!',
        text: '',
        // imageUrl: 'https://unsplash.it/400/200',
        // imageWidth: 400,
        // imageHeight: 200,
        // imageAlt: 'Custom image',
        animation: false
      })
    } else {
      Swal({
        title: title,
        text: text,
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        animation: false
      })
    }
  }
  ngOnInit() {

  }
}


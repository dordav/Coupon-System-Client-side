import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { company } from '../../components/companies/company';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CompanyServicesService {
  public company: company = new company(0, "", "", "");
  public company2: company = new company(0, "", "", "");


  constructor(private _http: Http) { }

  /**
   * @ngdoc method
   * @name initcomp()
   * @description
   * This method initial attributes of company object
  **/
  initcomp() {
    this.company.name = "";
    this.company.password = "";
    this.company.email = "";
    this.company2.name = "";
    this.company2.password = "";
    this.company2.email = "";

  }

  /**
* @ngdoc Async method
* @name createcompany()
* @param company:company
* @description
* This method gets an object of company and by fire an "ajax" ("post"-method),
* sends the object over Http protocol.
* Then by async (Observable) method named "subscribe" catch  the response.
**/
  createcompany(company: company) {

    // fire ajax POST
    this._http.post("http://localhost:8080/admin/createcompany",
      company)
      .subscribe(
        (resp) => {
          console.log(resp);
          this.swalDone("Created!", "Company by name: " + company.name + " created!")

        }, (err) => {
          console.log(err);
          this.swalwarning(err._body)
        }
      )
    this.initcomp();
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
   * @name getCompany()
   * @param id:number
   * @description
   * This method gets ID (number)  and by fire an "ajax" ("get"-method),
   * sends the ID over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response 
   * and put it into local object.
   **/
  getCompany(id: number) {
    if (!(id > 0)) {
      this.swalwarning("Wrong ID")

    } else {
      this._http.get("http://localhost:8080/admin/getcompany/" + id)
        .subscribe(
          // handle with the returned result
          (resp) => {
            console.log(resp)
            this.swalDone("", "")
            this.company = resp.json();
          }, (err) => {
            console.log(err);
            this.swalwarning(err._body);
          }
        )

      this.initcomp()
    }
  }

  /**
   * @ngdoc Async method
   * @name updatecompany()
   * @param company:company
   * @description
   * This method gets an object of company object and by fire an "ajax" ("put"-method),
   * sends the object over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response.
   **/
  updatecompany() {
    // fire ajax PUT
    this._http.put("http://localhost:8080/admin/updatecompany",
      this.company2).
      subscribe(
        // handle with the returned result
        (resp) => {
          // what to do with the result?
          console.log(resp)
          this.swalDone("Updated", "Company " + this.company2.name + " updateded")

        }, (err) => {
          console.log(err);
          this.swalwarning(err._body)
        }
      )
    this.initcomp();
  }

  /**
   * @ngdoc method
   * @name swalDel()
   * @param id: number
   * @description
   * This method gets a id: number
   *  and display a boolean question to the user.
   * according to the answer this method will invoke a deletecompany() method.
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
          'Your file has been deleted.',
          'success'
        )
        this.deletecompany(id)
      }
    })
  }

  /**
   * @ngdoc Async method
   * @name deletecompany()
   * @param id:number
   * @description
   * This method gets an ID (number) and by fire an "ajax" ("delete"-method),
   * sends the ID over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response.
   **/
  deletecompany(id: number) {
    // fire ajax DELETE
    this._http.delete("http://localhost:8080/admin/removecompany/" + id).
      subscribe(
        // handle with the returned result
        (resp) => {
          // what to do with the result?
          console.log(resp)
          this.swalDone("", "")
        }, (err) => {
          console.log(err);
          this.swalwarning(err._body)
        }
      )
    this.initcomp()
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




import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { coupon } from '../components/coupons/coupon'
import { Router } from '@angular/router'
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CouponsMethodsService {
  coupons: coupon[];
  coupons2: any[] = [];

  public coupon: coupon = new coupon(0, "", "", "", 0, 0, "", 0, "");
  // public idCoupon : number = 0;
  public id: number;


  constructor(private _http: Http, private _router: Router) { }
  /**
 * @ngdoc method
 * @name initcoup()
 * @description
 * This method initial attributes of local coupon objects
**/
  initcoup() {
    this.coupon.id = 0;
    this.coupon.title = '';
    this.coupon.start_date = '';
    this.coupon.end_date = '';
    this.coupon.amount = 0;
    this.coupon.massage = '';
    this.coupon.price = 0;
    this.coupon.image = '';
    this.coupon.type = 0;
    this.coupons = [{}];
  }

  /**
   * @ngdoc method
   * @name sortbytitle
   * @param coupons:coupons[] (Array)
   * @return The same array with sorted values
   */
  sortbytitle(coupons: coupon[]) {
    return this.coupons = coupons.sort((a, b) => {
      var x = a.title.toLowerCase();
      var y = b.title.toLowerCase();
      if (x < y) { return -1; }
      if (x > y) { return 1; }
      return 0
    })

  }

  /**
   * @ngdoc Async method
   * @name createcoupon()
   * @param coupon:coupon
   * @description
   * This method gets an object of coupon and by fire an "ajax" ("post"-method),
   * sends the object over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response.
  **/
  createcoupon(coupon: coupon) {
    if (coupon.title.length <= 0 || coupon.end_date == null || coupon.amount <= 0 || coupon.type == null || coupon.type == 0) {
      this.swalwarning("Please fill all the empty fields")
    } else {

      this._http.post("http://localhost:8080/company/createcoupon",
        coupon).
        subscribe(
          // handle with the returned result
          (resp) => {
            // what to do with the result?
            console.log(resp)
            this.swalDone("Created!", "Company by name: " + coupon.title + " created!")

          }, (err) => {
            console.log(err);
            this.swalwarning(err._body);
          }
        )
    }
    this.initcoup();
  }

  /**
   * @ngdoc Async method
   * @name updatecoupon()
   * @param coupon:coupon
   * @description
   * This method gets an object of coupon object and by fire an "ajax" ("put"-method),
   * sends the object over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response.
   **/
  updatecoupon(coupon2: coupon) {
    // fire ajax PUT
    this._http.put("http://localhost:8080/company/updatecoupon",
      coupon2).
      subscribe(
        // handle with the returned result
        (resp) => {
          // what to do with the result?
          console.log(resp)
          this.swalDone("Updated", "Company " + coupon2.title + " updateded")

        }, (err) => {
          console.log(err);
          this.swalwarning(err._body)
        }
      )
    this.initcoup();
  }

  /**
 * @ngdoc Async method
 * @name deletecoupon()
 * @param id:number
 * @description
 * This method gets an ID (number) and by fire an "ajax" ("delete"-method),
 * sends the ID over Http protocol.
 * Then by async (Observable) method named "subscribe" catch  the response.
 **/
  deletecoupon(id: number) {
    // fire ajax DELETE
    this._http.delete("http://localhost:8080/company/deletecoupon/" + id).
      subscribe(
        // handle with the returned result
        (resp) => {
          // what to do with the result?
          console.log(resp)
        }, (err) => {
          console.log(err);
          if (err.status != 410) {
            this.swalwarning(err._body)

          }
        }
      )
    this.initcoup();
  }

  /**
   * @ngdoc Async method
   * @name getcouponsbytype()
   * @param type:any
   * @description
   * This method gets type (any) and by fire an "ajax" ("get"-method),
   * sends the type over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response 
   * and put it into local array.
   **/
  getcouponsbytype(type: any) {
    this._http.get("http://localhost:8080/company/getallcouponsbytype/" + type).
      subscribe(
        // handle with the returned result
        (resp) => {

          // what to do with the result?
          console.log(resp)
          this.coupons = this.sortbytitle(resp.json());
          this.coupons2 = this.coupons;
          // fire ajax GET
        }, (err) => {
          console.log(err);
          this.swalwarning(err._body);
        }
      )
    this.initcoup();
  }

  /**
* @ngdoc Async method
* @name getcoupon1()
* @param id:number
* @description
* This method gets ID (number)  and fire an "ajax" ("get"-method),
* sends the ID over Http protocol.
* Then by async (Observable) method named "subscribe" catch  the response 
* and put it into local object.
**/
  getcoupon1(id: number) {
    if (!(id > 0)) {
      this.swalwarning("Wrong ID")
      console.log(id)
    } else {
      this._http.get("http://localhost:8080/company/getcoupon/" + id).
        subscribe(
          // handle with the returned result
          (resp) => {
            this.swalDone("", "");
            this.coupon = resp.json();
            // what to do with the result?
            console.log(resp)
          }, (err) => {
            console.log(err);
            this.swalwarning(err._body)
          }
        )
    }
    this.initcoup();
  }

  /**
 * @ngdoc Async method
 * @name getcouponsbyprice()
 * @param price:number
 * @description
 * This method gets price (number)  and by fire an "ajax" ("get"-method),
 * sends the price over Http protocol.
 * Then by async (Observable) method named "subscribe" catch  the response 
 * and put it into local array.
 **/
  getcouponsbyprice(price: number) {
    this._http.get("http://localhost:8080/company/getallcouponsbyprice/" + price).
      subscribe(
        // handle with the returned result
        (resp) => {

          // what to do with the result?
          console.log(resp)
          this.coupons = this.sortbytitle(resp.json());
          this.coupons2 = this.coupons;
          // fire ajax GET
        }, (err) => {
          console.log(err);
          this.swalwarning(err._body);
        }
      )
    this.initcoup();
  }

  /**
 * @ngdoc Async method
 * @name getcouponsbydate()
 * @param date:string
 * @description
 * This  method gets date (string) and by fire an "ajax" ("get"-method),
 * sends the date over Http protocol.
 * Then by async (Observable) method named "subscribe" catch  the response 
 * and put it into local array.
 **/
  getcouponsbydate(date: string) {
    this._http.get("http://localhost:8080/company/getallcouponsbydate/" + date).
      subscribe(
        // handle with the returned result
        (resp) => {

          // what to do with the result?
          console.log(resp)
          this.coupons = this.sortbytitle(resp.json());
          this.coupons2 = this.coupons;
          // fire ajax GET
        }, (err) => {
          console.log(err);
          this.swalwarning(err._body);
        }
      )
    this.initcoup();
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
    let x: coupon = this.coupons2[i];
    this._router.navigate(["UpdateCoupon", x.id])

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
        this.deletecoupon(id)
      }
    })
  }

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

  /**
 * @ngdoc method
 * @name swalDone()
 * @param title: string 
 * @param text : string
 * @description
 * This is method gets a  title: string & text : string
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



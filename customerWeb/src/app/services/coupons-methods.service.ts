import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { coupon } from '../components/coupons/coupon'
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CouponsMethodsService {
  public coupon: coupon = new coupon(0, "", "", "", 0, 0, "", 0, "")
  coupons: coupon[];
  coupons2: any[] = [];


  _route: ActivatedRoute
  constructor(private _http: Http, private _router: Router) { }

  /**
 * @ngdoc method
 * @name initcoup()
 * @description
 * This method initial attributes of local coupon object
**/
  initcoup() {
    this.coupons = null;
    // this.coupon.id=0;
    // this.coupon.title='';
    // this.coupon.start_date='';
    // this.coupon.end_date='';
    // this.coupon.amount=0;
    // this.coupon.massage='';
    // this.coupon.price=0;
    // this.coupon.image='';
    // this.coupon.type=0;
    // this.coupons=[{}];
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
   * @name getcouponsbyprice()
   * @param price:number
   * @description
   * This method gets price (number)  and by fire an "ajax" ("get"-method),
   * sends the price over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response 
   * and put it into local array.
   **/
  getcouponsbyprice(price: number) {
    this._http.get("http://localhost:8080/customer/getallcouponsbyprice/" + price).
      subscribe(
        // handle with the returned result
        (resp) => {
          this.swalDone("", "")
          // what to do with the result?
          console.log(resp)
          this.coupons = this.sortbytitle(resp.json())
        }, (err) => {
          console.log(err);
          this.swalwarning(err._body)
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
    this._http.get("http://localhost:8080/customer/getallcouponsbytype/" + type).
      subscribe(
        // handle with the returned result
        (resp) => {
          this.swalDone("", "")
          // what to do with the result?
          console.log(resp)
          this.coupons = this.sortbytitle(resp.json())

          // fire ajax GET
        }, (err) => {
          console.log(err);
          this.swalwarning(err._body)
        }
      )
    this.initcoup();
  }

  // /**
  //  * @ngdoc Async method
  //  * @name getcouponsbydate()
  //  * @param date:string
  //  * @description
  //  * This  method gets date (string) and by fire an "ajax" ("get"-method),
  //  * sends the date over Http protocol.
  //  * Then by async (Observable) method named "subscribe" catch  the response 
  //  * and put it into local array.
  //  **/
  // getcouponsbydate(date: string) {
  //   this._http.get("http://localhost:8080/customer/getallcouponsbydate/" + date).
  //     subscribe(
  //       // handle with the returned result
  //       (resp) => {

  //         this.swalDone("", "")
  //         // what to do with the result?
  //         console.log(resp)
  //         this.coupons = this.sortbytitle(resp.json())

  //         // fire ajax GET
  //       }, (err) => {
  //         console.log(err);
  //         this.swalwarning(err._body)
  //       }
  //     )
  //   this.initcoup();
  // }


  /**
   * @ngdoc Async method
   * @name getallcoupons()
   * @description
   * This method fire an "ajax" ("get"-method) over Http protocol.
   * Then by async (Observable) method named "subscribe" catch  the response 
   * and put it into local array.
   **/
  getallcoupons() {
    this._http.get("http://localhost:8080/customer/getallcoupons").
      subscribe(
        // handle with the returned result
        (resp) => {
          this.swalDone("", "")
          this.coupons = this.sortbytitle(resp.json())
          // what to do with the result?
          console.log(resp)
          // fire ajax GET
        }, (err) => {
          console.log(err);
          this.swalwarning(err._body)
        }
      )
    this.initcoup();
  }

  swal1() {
    swal({
      text: "Cart",

      confirmButtonText: "Let me pay ",
      cancelButtonText: "Keep shooping",
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.value) {
        if (this.coupons2.length != 0) {
          console.log(result.value);
          this.routnav();
        } else {
          swal({
            type: 'error',
            title: 'Oops...',
            text: "Your Cart is empty!",

          })
        }
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
    swal({
      type: 'error',
      title: 'Oops...',
      text: err + '!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }

  /**
 * @ngdoc method
 * @name gotopayment()
 * @param i: number
 * @description
 * This method gets a i: number.
 *  Pass it to "addtocart" method and play "routnav" method
 **/
  gotopayment(i: number) {
    this.addtocart(i);
    this.routnav();
  }

  /**
* @ngdoc method
* @name routnav()
* @description
* This method navigate the client's page to relative page.
* This method uses Router module
**/
  routnav() {
    this._router.navigate(['ShoppingCart'], { relativeTo: this._route })
  }

  /**
   * @ngdoc method
   * @param i: number
   * @name routnav()
   * @description
   * This method gets i: number, print it to the browser's console 
   * and push object coupon by the same I index into local other array.
   **/
  addtocart(i: number) {
    console.log(i);
    this.coupons2.push(this.coupons[i]);
  }

  /**
 * @ngdoc method
 * @param i: number
 * @name routnav()
 * @description
 * This method gets i: number (index) and uses "slice" method
 *  for delete coupon object in the I - index place
 **/
  deleteCoupon(i: number) {
    this.coupons2.splice(i, 1);
  }


  /**
 * @ngdoc Async method
 * @name createcoupon()
 * @description
 * This method run over array objects of coupon that choosed by the user to buy
 * and pass it by fire an "ajax" ("post"-method), sends each object over Http protocol.
 * Then by async (Observable) method named "subscribe" catch  the response.
 * and for last, execute an initial to the array.
**/
  purchase() {
    this.coupons2.forEach(coupon => {
      this._http.post("http://localhost:8080/customer/purchasecoupon",
        coupon).
        subscribe(
          // handle with the returned result
          (resp) => {

            this.coupons = this.sortbytitle(resp.json())
            this.swalDone("Purchased!", "Coupon by title: " + coupon.title + " purchased!")

            // what to do with the result?
            console.log(resp)

            // fire ajax GET
          }, (err) => {
            console.log(err);
            this.swalwarning(err._body)
          }
        )
      this.coupons2 = [];
    }
    );

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
      swal({
        title: 'done!',
        text: '',
        // imageUrl: 'https://unsplash.it/400/200',
        // imageWidth: 400,
        // imageHeight: 200,
        // imageAlt: 'Custom image',
        animation: false
      })
    } else {
      swal({
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
}

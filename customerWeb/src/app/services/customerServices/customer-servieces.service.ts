import { Injectable } from '@angular/core';
import { coupon } from '../../components/coupons/coupon';
import { Http } from '@angular/http';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiecesService {
  coupons : coupon[];
  public coupon : coupon = new coupon (0,"","","",0,0,"",0,"")
  coupons2 : coupon[];
  
  
  constructor(private _http : Http) { }
 
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
 * @ngdoc method
 * @name initcoup()
 * @description
 * This method initial attributes of local coupon array
**/
  initcoup() {
    this.coupons = [];}


/**
 * @ngdoc Async method
 * @name getallpurchasedcoupons()
 * @description
 * This method fire an "ajax" ("get"-method) over Http protocol.
 * Then by async (Observable) method named "subscribe" catch  the response 
 * and put it into local array.
 **/   
  getallpurchasedcoupons(){
    this._http.get("http://localhost:8080/customer/purchasedcoupons").
    subscribe(
    // handle with the returned result
    (resp) => {
      this.swalDone("", "")
      this.coupons = this.sortbytitle(resp.json());
      this.coupons2=this.coupons;
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

/**
 * @ngdoc Async method
 * @name getpurchasedcouponsbytype()
 * @param type:any
 * @description
 * This method gets type (any) and by fire an "ajax" ("get"-method),
 * sends the type over Http protocol.
 * Then by async (Observable) method named "subscribe" catch  the response 
 * and put it into local array.
 **/
  getpurchasedcouponsbytype(type : any){
    this._http.get("http://localhost:8080/customer/purchasedcouponsbytype/" + type).
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

/**
 * @ngdoc Async method
 * @name getpurchasedcouponsbyprice()
 * @param price:number
 * @description
 * This method gets price (number)  and by fire an "ajax" ("get"-method),
 * sends the price over Http protocol.
 * Then by async (Observable) method named "subscribe" catch  the response 
 * and put it into local array.
 **/
  getpurchasedcouponsbyprice(price : number){
    this._http.get("http://localhost:8080/customer/purchasedcouponsbyprice/" + price).
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

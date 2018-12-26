import { Component, OnInit } from '@angular/core';
import { coupon } from '../coupon';
import { Http } from '@angular/http';
import { UpdateCouponComponent } from '../update-coupon/update-coupon.component';
import { CouponsMethodsService } from '../../../services/coupons-methods.service';
import { Router, ActivatedRoute } from '@angular/router';



// import { Router } from '@angular/router/src/router';


@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {

  // public coupon : coupon = new coupon (0,"","","",0,"","",0,"")

  coupons: coupon[];
  coupons2: coupon[] = [];



  constructor(
    private _http: Http,
    private _coupser: CouponsMethodsService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {

    /**
     * @function http:Http.
     * @description
     * This function fire an "ajax" ("get"-method) over Http protocol.
     * Then by async (Observable) method named "subscribe" catch  the response 
     * and put it into local array.
     **/
    this._http.get("http://localhost:8080/company/getallcoupons").
      subscribe(
        // handle with the returned result
        (resp) => {
          this.coupons = this.sortbytitle(resp.json());
          this.coupons2 = this.coupons;

          // what to do with the result?
          console.log(resp)

          // fire ajax GET
        }
      )
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
    this._router.navigate(["UpdateCoupon", x.id], { relativeTo: this._route });

  }

  /**
* @ngdoc method
* @name gettogetcoup()
* @param i:number (index)
* @description
* This method gets param i:index and put it in local member.
* navigate to other component and pass the local member value.
**/
  gettogetcoup(i: number) {
    let x: coupon = this.coupons2[i];
    this._router.navigate(["GetCoupon", x.id], { relativeTo: this._route });

  }

  /**
* @ngdoc method
* @name gettoremove()
* @param i:number (index)
* @description
* This method gets param i:index and put it in local member.
* navigate to other component and pass the local member value.
**/
  gettoremove(i: number) {
    let x: coupon = this.coupons2[i];
    this._router.navigate(["RemoveCoupons", x.id], { relativeTo: this._route });

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

  ngOnInit() {
  }

}

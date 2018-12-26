import { Component, OnInit } from '@angular/core';
import { coupon } from '../coupon';
import { CouponsMethodsService } from '../../../services/coupons-methods.service'

@Component({
  selector: 'app-get-all-coupons-by-type',
  templateUrl: './get-all-coupons-by-type.component.html',
  styleUrls: ['./get-all-coupons-by-type.component.css']
})
export class GetAllCouponsByTypeComponent implements OnInit {
  public coupon : coupon = new coupon (0,"","","",0,0,"",0,"")
  coupons : coupon[];
  

  constructor( private _coupserv : CouponsMethodsService) { }
  
   /**
 * @ngdoc method
 * @name newComp()
 * @description
 * This method act as transfer station
 *  and apply other method on the service , named "getcouponsbytype" 
 **/
  getallcoupbytype():void {
   this._coupserv.getcouponsbytype(this.coupon.type)
   this.coupons=this._coupserv.coupons;

  }
  
  ngOnInit() {
    var show = false;
  }

}

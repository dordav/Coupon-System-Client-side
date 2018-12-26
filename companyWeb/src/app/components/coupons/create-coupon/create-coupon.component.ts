import { Component, OnInit } from '@angular/core';
import { CouponsMethodsService } from '../../../services/coupons-methods.service'
import { coupon } from '../coupon'


@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.css']
})
export class CreateCouponComponent implements OnInit {

  public coupon : coupon = new coupon (0,"","","",0,"","",0,"")
  

  constructor( private _coupserv : CouponsMethodsService) { }
  
  ngOnInit() {
  }

  newcoup(coupon: coupon){
    this._coupserv.createcoupon(this.coupon);
  }
  
}

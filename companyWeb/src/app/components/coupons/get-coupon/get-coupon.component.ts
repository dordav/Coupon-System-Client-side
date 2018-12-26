import { Component, OnInit } from '@angular/core';
import { coupon } from '../coupon'
import { CouponsMethodsService } from '../../../services/coupons-methods.service'
import { observable } from 'rxjs/internal/symbol/observable';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-get-coupon',
  templateUrl: './get-coupon.component.html',
  styleUrls: ['./get-coupon.component.css']
})
export class GetCouponComponent implements OnInit {

  constructor( private _coupserv : CouponsMethodsService, private _activatedroute : ActivatedRoute) { }
  public coupon : coupon = new coupon (0,"","","",0,"","",0,"")
  id: number;
  ngOnInit() {
    this.id=this._activatedroute.snapshot.params['id'];
    console.log(this.id)
    this.coupon.id=this.id
  }
  
  // getcoup(coupon: coupon){
  //  this._coupserv.getcoupon(this.coupon)
  //  if (this.coupon.price=0) {
  //    console.log("jdkjdkjkd")
  //  }
  
  // }
}

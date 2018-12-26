import { Component, OnInit } from '@angular/core';
import { coupon } from '../../coupon';
import { CouponsMethodsService } from '../../../../services/coupons-methods.service';


@Component({
  selector: 'app-get-all-coupons-by-type',
  templateUrl: './get-all-coupons-by-type.component.html',
  styleUrls: ['./get-all-coupons-by-type.component.css']
})
export class GetAllCouponsByTypeComponent implements OnInit {
  public coupon : coupon = new coupon (0,"","","",0,0,"",0,"")
  
  constructor(private _coupserv:CouponsMethodsService) { }
  
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { coupon } from '../coupon';
import { CouponsMethodsService } from '../../../services/coupons-methods.service'

@Component({
  selector: 'app-get-all-coupons-by-date',
  templateUrl: './get-all-coupons-by-date.component.html',
  styleUrls: ['./get-all-coupons-by-date.component.css']
})
export class GetAllCouponsByDateComponent implements OnInit {
  coupons : coupon[];
  
  constructor( private _coupserv : CouponsMethodsService) { }
  
  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { coupon } from '../../components/coupons/coupon';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public coupon : coupon = new coupon (0,"","","",0,0,"",0,"")
  coupons : coupon[];
  
  addtocart(coupon : any){
    console.log(coupon);
this.coupons.push(coupon);
console.log(this.coupons);
  }

  constructor(private _http: Http) { }
}

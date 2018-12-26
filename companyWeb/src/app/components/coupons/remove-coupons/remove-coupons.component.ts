import { Component, OnInit } from '@angular/core';
import { CouponsMethodsService } from '../../../services/coupons-methods.service'
import { coupon } from '../coupon'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-remove-coupons',
  templateUrl: './remove-coupons.component.html',
  styleUrls: ['./remove-coupons.component.css']
})
export class RemoveCouponsComponent implements OnInit {

  public coupon: coupon = new coupon(0, "", "", "", 0, 0, "", 0, "")
  public coupon2: coupon = new coupon(0, "", "", "", 0, 0, "", 0, "")

  constructor(private _coupserv: CouponsMethodsService, private _activatedroute: ActivatedRoute) { }
  id: number;
  show: boolean = false;

  /**
* @ngdoc method
* @name getcoup()
* @description
* This method act as transfer station
*  and apply other method on the service , named "getcoupon1" 
**/
  getcoup() {
    this._coupserv.getcoupon1(this.coupon.id);
  }


  /**
* @ngdoc method
* @name delcomp()
* @description
* This method act as transfer station
*  and apply other method on the service , named "swalDel" 
**/
  delcomp() {
    this._coupserv.swalDel(this.coupon2.id);

  }
  ngOnInit() {
    this.id = this._activatedroute.snapshot.params['id'];
    console.log(this.id)
    this.coupon.id = this.id
    this.show = true;
    this.coupon2.id = this.id;
    this._coupserv.getcoupon1(this.id);
  }

}


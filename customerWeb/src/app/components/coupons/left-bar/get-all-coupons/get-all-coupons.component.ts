import { Component, OnInit } from '@angular/core';
import { CouponsMethodsService } from '../../../../services/coupons-methods.service'


@Component({
  selector: 'app-get-all-coupons',
  templateUrl: './get-all-coupons.component.html',
  styleUrls: ['./get-all-coupons.component.css']
})
export class GetAllCouponsComponent implements OnInit {

  show=false;
  constructor(private _coupserv : CouponsMethodsService) { }

  ngOnInit() {
  }

}

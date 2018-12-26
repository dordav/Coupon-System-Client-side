import { Component, OnInit } from '@angular/core';
import { CouponsMethodsService } from '../../../services/coupons-methods.service'
import { CartServiceService } from '../../../services/cart service/cart-service.service'


@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  

  constructor(private _coupserv : CouponsMethodsService, private _cartserv : CartServiceService) { }
  ngOnInit() {
    
  }
  
}

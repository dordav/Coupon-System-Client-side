import { Component, OnInit } from '@angular/core';
import { CustomerServiecesService } from '../../../services/customerServices/customer-servieces.service'

@Component({
  selector: 'app-left-bar-cust',
  templateUrl: './left-bar-cust.component.html',
  styleUrls: ['./left-bar-cust.component.css']
})
export class LeftBarCustComponent implements OnInit {

  constructor(private _custServ : CustomerServiecesService) { }

  ngOnInit() {
  }

}

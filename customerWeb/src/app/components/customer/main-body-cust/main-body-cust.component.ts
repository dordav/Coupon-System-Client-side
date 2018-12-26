import { Component, OnInit } from '@angular/core';
import { CustomerServiecesService } from '../../../services/customerServices/customer-servieces.service'


@Component({
  selector: 'app-main-body-cust',
  templateUrl: './main-body-cust.component.html',
  styleUrls: ['./main-body-cust.component.css']
})
export class MainBodyCustComponent implements OnInit {

  constructor(private _custserv : CustomerServiecesService) { }

  ngOnInit() {
  }

}

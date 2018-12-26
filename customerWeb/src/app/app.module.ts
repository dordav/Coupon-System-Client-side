import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { AppRoutingModule } from './app-routing.module'
import { CouponsMethodsService } from './services/coupons-methods.service'
import { from } from 'rxjs/internal/observable/from';
import { LeftBarComponent } from './components/coupons/left-bar/left-bar.component';
import { MainBodyComponent } from './components/coupons/main-body/main-body.component';
import { ShoppingCartComponent } from './components/coupons/main-body/shopping-cart/shopping-cart.component';
import { GetAllCouponsComponent } from './components/coupons/left-bar/get-all-coupons/get-all-coupons.component';
import { GetAllCouponsByTypeComponent } from './components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component';
import { GetAllCouponsByPriceComponent } from './components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component';
import { GetAllCouponsByDateComponent } from './components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerServiecesService } from './services/customerServices/customer-servieces.service';
import { LeftBarCustComponent } from './components/customer/left-bar-cust/left-bar-cust.component';
import { MainBodyCustComponent } from './components/customer/main-body-cust/main-body-cust.component';
import { CustomerWebMainPageComponent } from './components/customer-web-main-page/customer-web-main-page.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CouponsComponent,
    LeftBarComponent,
    MainBodyComponent,
    ShoppingCartComponent,
    GetAllCouponsComponent,
    GetAllCouponsByTypeComponent,
    GetAllCouponsByPriceComponent,
    GetAllCouponsByDateComponent,
    CustomerComponent,
    LeftBarCustComponent,
    MainBodyCustComponent,
    CustomerWebMainPageComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [CouponsMethodsService,CustomerServiecesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

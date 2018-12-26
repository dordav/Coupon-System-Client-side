import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { AppComponent } from './app.component';
import { CompanyWebComponent } from './components/company-web/company-web.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { CreateCouponComponent } from './components/coupons/create-coupon/create-coupon.component';
import { UpdateCouponComponent } from './components/coupons/update-coupon/update-coupon.component';
import { GetCouponComponent } from './components/coupons/get-coupon/get-coupon.component';
import { GetAllCouponsComponent } from './components/coupons/get-all-coupons/get-all-coupons.component';
import { RemoveCouponsComponent } from './components/coupons/remove-coupons/remove-coupons.component';
import { ButtonBarComponent } from './components/button-bar/button-bar.component';
import { GetAllCouponsByTypeComponent } from './components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component';
import { GetAllCouponsByPriceComponent } from './components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component';
import { GetAllCouponsByDateComponent } from './components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component';
import { CouponsMethodsService } from './services/coupons-methods.service'
@NgModule({
  declarations: [
    AppComponent,
    CompanyWebComponent,
    CouponsComponent,
    CreateCouponComponent,
    UpdateCouponComponent,
    GetCouponComponent,
    GetAllCouponsComponent,
    RemoveCouponsComponent,
    NavBarComponent,
    ButtonBarComponent,
    GetAllCouponsByTypeComponent,
    GetAllCouponsByPriceComponent,
    GetAllCouponsByDateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [CouponsMethodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

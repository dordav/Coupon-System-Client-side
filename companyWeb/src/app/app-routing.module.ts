import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { Component } from '@angular/core/src/metadata/directives';
import { CompanyWebComponent } from './components/company-web/company-web.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { CreateCouponComponent } from './components/coupons/create-coupon/create-coupon.component';
import { UpdateCouponComponent } from './components/coupons/update-coupon/update-coupon.component';
import { GetCouponComponent } from './components/coupons/get-coupon/get-coupon.component';
import { GetAllCouponsComponent } from './components/coupons/get-all-coupons/get-all-coupons.component';
import { RemoveCouponsComponent } from './components/coupons/remove-coupons/remove-coupons.component';
import { GetAllCouponsByTypeComponent } from './components/coupons/get-all-coupons-by-type/get-all-coupons-by-type.component';
import { GetAllCouponsByPriceComponent } from './components/coupons/get-all-coupons-by-price/get-all-coupons-by-price.component';
import { GetAllCouponsByDateComponent } from './components/coupons/get-all-coupons-by-date/get-all-coupons-by-date.component';

const routes: Routes = [

    { path: '#',   redirectTo: 'CompanyWeb', pathMatch: 'full' },
    { path: '',   redirectTo: 'CompanyWeb', pathMatch: 'full' },
    {path: 'CompanyWeb' , component: CompanyWebComponent},
    {path: 'Coupons' , component: CouponsComponent},
    {path : 'CreateCoupon' , component: CreateCouponComponent},
    {path : 'GetAllCoupons/UpdateCoupon/:id' , component: UpdateCouponComponent},  
    {path : 'GetAllCoupons/RemoveCoupons/:id' , component: RemoveCouponsComponent},  
    {path : 'GetAllCoupons/GetCoupon/:id' , component: GetCouponComponent},    
    {path : 'UpdateCoupon' , component: UpdateCouponComponent},
    {path : 'GetCoupon' , component: GetCouponComponent},
    {path : 'GetAllCoupons' , component: GetAllCouponsComponent},
    {path : 'RemoveCoupons' , component: RemoveCouponsComponent},
    {path : 'GetAllCouponsByType' , component: GetAllCouponsByTypeComponent},
    {path : 'GetAllCouponsByPrice' , component: GetAllCouponsByPriceComponent},
    {path : 'GetAllCouponsByDate' , component: GetAllCouponsByDateComponent},   
    { path: '**',   redirectTo: 'CompanyWeb', pathMatch: 'full' },
];


@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash : true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
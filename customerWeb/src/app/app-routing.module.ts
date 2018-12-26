import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { Component } from '@angular/core/src/metadata/directives';
import { CouponsComponent } from './components/coupons/coupons.component';
import { LeftBarComponent } from './components/coupons/left-bar/left-bar.component';
import { MainBodyComponent } from './components/coupons/main-body/main-body.component';
import { ShoppingCartComponent } from './components/coupons/main-body/shopping-cart/shopping-cart.component';
import { GetAllCouponsComponent } from './components/coupons/left-bar/get-all-coupons/get-all-coupons.component';
import { GetAllCouponsByTypeComponent } from './components/coupons/left-bar/get-all-coupons-by-type/get-all-coupons-by-type.component';
import { GetAllCouponsByPriceComponent } from './components/coupons/left-bar/get-all-coupons-by-price/get-all-coupons-by-price.component';
import { GetAllCouponsByDateComponent } from './components/coupons/left-bar/get-all-coupons-by-date/get-all-coupons-by-date.component';
import { CustomerComponent } from './components/customer/customer.component'
import { CustomerWebMainPageComponent } from '../app/components/customer-web-main-page/customer-web-main-page.component'

const routes: Routes = [

     { path: '#',   redirectTo: 'CustomerWebMainPageComponent', pathMatch: 'full' },
     { path: '',   redirectTo: 'CustomerWebMainPageComponent', pathMatch: 'full' },
    
     {path: 'Customer' , component: CustomerComponent},
     {path: 'CustomerWebMainPage' , component: CustomerWebMainPageComponent},    
    // { path: 'ShoppingCartComponent',   redirectTo: 'ShoppingCartComponent', pathMatch: 'full' },
    {path: 'ShoppingCart' , component: ShoppingCartComponent},
    {path: 'Coupons' , component: CouponsComponent,
    children: [
        {path: 'GetAllCoupons' , component: GetAllCouponsComponent},
        {path: 'GetAllCouponsByType' , component: GetAllCouponsByTypeComponent},
        {path: 'GetAllCouponsByPrice' , component: GetAllCouponsByPriceComponent},
        {path: 'GetAllCouponsByDate' , component: GetAllCouponsByDateComponent},
    ]},
    {path: 'LeftBarComponent' , component: LeftBarComponent,
},
    { path: '**',   redirectTo: 'CustomerWebMainPage', pathMatch: 'full' },
    { path: 'ShoppingCart',   redirectTo: 'ShoppingCartComponent', pathMatch: 'full' },
];


@NgModule({
    imports: [ RouterModule.forRoot(routes , {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
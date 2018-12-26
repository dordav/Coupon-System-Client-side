import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { AdminWebComponent } from './components/admin-web/admin-web.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CustomersComponent } from './components/customers/customers.component';
import { GetAllCompaniesComponent } from './components/companies/get-all-companies/get-all-companies.component';
import { CreateNewCompanyComponent } from './components/companies/create-new-company/create-new-company.component';
import { GetcomapnyComponent } from './components/companies/getcomapny/getcomapny.component';
import { UpdateCompanyComponent } from './components/companies/update-company/update-company.component'
import { DeleteCompanyComponent } from './components/companies/delete-company/delete-company.component'
import { GetAllCustomersComponent } from './components/customers/get-all-customers/get-all-customers.component'
import { GetCustomerComponent } from './components/customers/get-customer/get-customer.component'
import { CreateNewCustomerComponent } from './components/customers/create-new-customer/create-new-customer.component'
import { UpdateCustomerComponent } from './components/customers/update-customer/update-customer.component'
import { DeleteCustomerComponent } from './components/customers/delete-customer/delete-customer.component'
import { Component } from '@angular/core/src/metadata/directives';

const routes: Routes = [
    { path: '', redirectTo: 'mainpage', pathMatch: 'full'},
    { path: '#', redirectTo: 'mainpage', pathMatch: 'full'},
    { path: 'mainpage', component: AdminWebComponent},
    { path: 'company', component: CompaniesComponent},
    { path: 'customer', component: CustomersComponent}, 
    {path : 'getallcompanies/updatecompany/:id' , component: UpdateCompanyComponent},
    { path: 'getallcompanies', component: GetAllCompaniesComponent},
    { path: 'appcreatenewcompany', component: CreateNewCompanyComponent},
    { path: 'getcompany', component: GetcomapnyComponent},
    { path: 'updatecompany' , component: UpdateCompanyComponent },
    { path: 'deletecompany' , component: DeleteCompanyComponent},
    { path: 'getcustomer' , component: GetCustomerComponent} , 
    { path: 'getallcustomers' , component: GetAllCustomersComponent},
    { path: 'createnewcustomer' , component: CreateNewCustomerComponent},
    { path: 'updatecustomer'  , component: UpdateCustomerComponent},
    { path: 'deletecustomer' , component: DeleteCustomerComponent},
    { path: '**', redirectTo: 'mainpage', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
import { BrowserModule } from '@angular/platform-browser';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminWebComponent } from './components/admin-web/admin-web.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CustomersComponent } from './components/customers/customers.component';
import { GetAllCompaniesComponent } from './components/companies/get-all-companies/get-all-companies.component';
import { CreateNewCompanyComponent } from './components/companies/create-new-company/create-new-company.component';
import { UpdateCompanyComponent } from './components/companies/update-company/update-company.component';
import { HttpModule } from '@angular/http';
import { GetcomapnyComponent } from './components/companies/getcomapny/getcomapny.component';
import { CompanyServicesService } from './services/companyServices/company-services.service';
import { DeleteCompanyComponent } from './components/companies/delete-company/delete-company.component';
import { GetAllCustomersComponent } from './components/customers/get-all-customers/get-all-customers.component';
import { CreateNewCustomerComponent } from './components/customers/create-new-customer/create-new-customer.component';
import { GetCustomerComponent } from './components/customers/get-customer/get-customer.component';
import { UpdateCustomerComponent } from './components/customers/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/customers/delete-customer/delete-customer.component';
import { CustomerServicesService } from './services/customerServices/customer-services.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminWebComponent,
    NavBarComponent,
    CompaniesComponent,
    CustomersComponent,
    GetAllCompaniesComponent,
    CreateNewCompanyComponent,
    UpdateCompanyComponent,
    GetcomapnyComponent,
    DeleteCompanyComponent,
    GetAllCustomersComponent,
    CreateNewCustomerComponent,
    GetCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [
    // {provide: LocationStrategy, useClass:HashLocationStrategy},
    CompanyServicesService,CustomerServicesService,
    ],
  bootstrap: [AppComponent]

})
export class AppModule { }

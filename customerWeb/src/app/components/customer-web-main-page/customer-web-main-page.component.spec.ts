import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWebMainPageComponent } from './customer-web-main-page.component';

describe('CustomerWebMainPageComponent', () => {
  let component: CustomerWebMainPageComponent;
  let fixture: ComponentFixture<CustomerWebMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerWebMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerWebMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

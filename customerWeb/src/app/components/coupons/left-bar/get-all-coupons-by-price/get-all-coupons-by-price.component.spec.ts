import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCouponsByPriceComponent } from './get-all-coupons-by-price.component';

describe('GetAllCouponsByPriceComponent', () => {
  let component: GetAllCouponsByPriceComponent;
  let fixture: ComponentFixture<GetAllCouponsByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCouponsByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCouponsByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

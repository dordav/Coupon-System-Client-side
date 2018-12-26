import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCouponsByTypeComponent } from './get-all-coupons-by-type.component';

describe('GetAllCouponsByTypeComponent', () => {
  let component: GetAllCouponsByTypeComponent;
  let fixture: ComponentFixture<GetAllCouponsByTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCouponsByTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCouponsByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCouponsByDateComponent } from './get-all-coupons-by-date.component';

describe('GetAllCouponsByDateComponent', () => {
  let component: GetAllCouponsByDateComponent;
  let fixture: ComponentFixture<GetAllCouponsByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCouponsByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCouponsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

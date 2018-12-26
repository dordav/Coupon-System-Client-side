import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCouponsComponent } from './remove-coupons.component';

describe('RemoveCouponsComponent', () => {
  let component: RemoveCouponsComponent;
  let fixture: ComponentFixture<RemoveCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

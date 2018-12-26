import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarCustComponent } from './left-bar-cust.component';

describe('LeftBarCustComponent', () => {
  let component: LeftBarCustComponent;
  let fixture: ComponentFixture<LeftBarCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftBarCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyCustComponent } from './main-body-cust.component';

describe('MainBodyCustComponent', () => {
  let component: MainBodyCustComponent;
  let fixture: ComponentFixture<MainBodyCustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBodyCustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

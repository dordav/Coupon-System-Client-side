import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcomapnyComponent } from './getcomapny.component';

describe('GetcomapnyComponent', () => {
  let component: GetcomapnyComponent;
  let fixture: ComponentFixture<GetcomapnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcomapnyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcomapnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

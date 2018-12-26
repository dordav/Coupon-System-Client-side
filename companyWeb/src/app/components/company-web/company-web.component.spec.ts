import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyWebComponent } from './company-web.component';

describe('CompanyWebComponent', () => {
  let component: CompanyWebComponent;
  let fixture: ComponentFixture<CompanyWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

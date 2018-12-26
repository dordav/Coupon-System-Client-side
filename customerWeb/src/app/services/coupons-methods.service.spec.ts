import { TestBed } from '@angular/core/testing';

import { CouponsMethodsService } from './coupons-methods.service';

describe('CouponsMethodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CouponsMethodsService = TestBed.get(CouponsMethodsService);
    expect(service).toBeTruthy();
  });
});

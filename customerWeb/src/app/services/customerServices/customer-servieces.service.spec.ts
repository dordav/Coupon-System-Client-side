import { TestBed } from '@angular/core/testing';

import { CustomerServiecesService } from './customer-servieces.service';

describe('CustomerServiecesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerServiecesService = TestBed.get(CustomerServiecesService);
    expect(service).toBeTruthy();
  });
});

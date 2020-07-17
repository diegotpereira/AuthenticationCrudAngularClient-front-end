import { TestBed } from '@angular/core/testing';

import { Partner.ServiceService } from './partner.service.service';

describe('Partner.ServiceService', () => {
  let service: Partner.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Partner.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

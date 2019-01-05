import { TestBed, inject } from '@angular/core/testing';

import { PackagesServiceService } from './packages-service.service';

describe('PackagesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PackagesServiceService]
    });
  });

  it('should be created', inject([PackagesServiceService], (service: PackagesServiceService) => {
    expect(service).toBeTruthy();
  }));
});

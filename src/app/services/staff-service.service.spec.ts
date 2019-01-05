import { TestBed, inject } from '@angular/core/testing';

import { StaffServiceService } from './staff-service.service';

describe('StaffServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaffServiceService]
    });
  });

  it('should be created', inject([StaffServiceService], (service: StaffServiceService) => {
    expect(service).toBeTruthy();
  }));
});

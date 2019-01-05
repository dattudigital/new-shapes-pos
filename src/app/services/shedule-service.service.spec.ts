import { TestBed, inject } from '@angular/core/testing';

import { SheduleServiceService } from './shedule-service.service';

describe('SheduleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheduleServiceService]
    });
  });

  it('should be created', inject([SheduleServiceService], (service: SheduleServiceService) => {
    expect(service).toBeTruthy();
  }));
});

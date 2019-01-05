import { TestBed, inject } from '@angular/core/testing';

import { TimeClokServiceService } from './time-clok-service.service';

describe('TimeClokServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeClokServiceService]
    });
  });

  it('should be created', inject([TimeClokServiceService], (service: TimeClokServiceService) => {
    expect(service).toBeTruthy();
  }));
});

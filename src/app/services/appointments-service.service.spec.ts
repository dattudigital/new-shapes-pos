import { TestBed, inject } from '@angular/core/testing';

import { AppointmentsServiceService } from './appointments-service.service';

describe('AppointmentsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentsServiceService]
    });
  });

  it('should be created', inject([AppointmentsServiceService], (service: AppointmentsServiceService) => {
    expect(service).toBeTruthy();
  }));
});

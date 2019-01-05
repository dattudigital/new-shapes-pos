import { TestBed, inject } from '@angular/core/testing';

import { NewTicketNextButtonServiceService } from './new-ticket-next-button-service.service';

describe('NewTicketNextButtonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewTicketNextButtonServiceService]
    });
  });

  it('should be created', inject([NewTicketNextButtonServiceService], (service: NewTicketNextButtonServiceService) => {
    expect(service).toBeTruthy();
  }));
});

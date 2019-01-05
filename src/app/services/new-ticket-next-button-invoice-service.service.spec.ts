import { TestBed, inject } from '@angular/core/testing';

import { NewTicketNextButtonInvoiceServiceService } from './new-ticket-next-button-invoice-service.service';

describe('NewTicketNextButtonInvoiceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewTicketNextButtonInvoiceServiceService]
    });
  });

  it('should be created', inject([NewTicketNextButtonInvoiceServiceService], (service: NewTicketNextButtonInvoiceServiceService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { GiftCardServiceService } from './gift-card-service.service';

describe('GiftCardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiftCardServiceService]
    });
  });

  it('should be created', inject([GiftCardServiceService], (service: GiftCardServiceService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { AddPromotionServiceService } from './add-promotion-service.service';

describe('AddPromotionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddPromotionServiceService]
    });
  });

  it('should be created', inject([AddPromotionServiceService], (service: AddPromotionServiceService) => {
    expect(service).toBeTruthy();
  }));
});

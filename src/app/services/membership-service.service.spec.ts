import { TestBed, inject } from '@angular/core/testing';

import { MembershipServiceService } from './membership-service.service';

describe('MembershipServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembershipServiceService]
    });
  });

  it('should be created', inject([MembershipServiceService], (service: MembershipServiceService) => {
    expect(service).toBeTruthy();
  }));
});

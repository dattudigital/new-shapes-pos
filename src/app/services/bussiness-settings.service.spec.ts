import { TestBed, inject } from '@angular/core/testing';

import { BussinessSettingsService } from './bussiness-settings.service';

describe('BussinessSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BussinessSettingsService]
    });
  });

  it('should be created', inject([BussinessSettingsService], (service: BussinessSettingsService) => {
    expect(service).toBeTruthy();
  }));
});

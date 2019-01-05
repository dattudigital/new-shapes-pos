import { TestBed, inject } from '@angular/core/testing';

import { NewsEventsServiceService } from './news-events-service.service';

describe('NewsEventsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsEventsServiceService]
    });
  });

  it('should be created', inject([NewsEventsServiceService], (service: NewsEventsServiceService) => {
    expect(service).toBeTruthy();
  }));
});

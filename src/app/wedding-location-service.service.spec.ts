import { TestBed } from '@angular/core/testing';

import { WeddingLocationServiceService } from './wedding-location-service.service';

describe('WeddingLocationServiceService', () => {
  let service: WeddingLocationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeddingLocationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

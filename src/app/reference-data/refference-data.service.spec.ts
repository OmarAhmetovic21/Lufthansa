import { TestBed } from '@angular/core/testing';

import { RefferenceDataService } from './refference-data.service';

describe('RefferenceDataService', () => {
  let service: RefferenceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefferenceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

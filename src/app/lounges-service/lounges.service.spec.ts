import { TestBed } from '@angular/core/testing';

import { LoungesService } from './lounges.service';

describe('LoungesService', () => {
  let service: LoungesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoungesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SahiratoAuthService } from './sahirato-auth.service';

describe('SahiratoAuthService', () => {
  let service: SahiratoAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SahiratoAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

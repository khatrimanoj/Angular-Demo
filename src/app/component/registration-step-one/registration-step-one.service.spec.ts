import { TestBed } from '@angular/core/testing';

import { RegistrationStepOneService } from './registration-step-one.service';

describe('RegistrationStepOneService', () => {
  let service: RegistrationStepOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationStepOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

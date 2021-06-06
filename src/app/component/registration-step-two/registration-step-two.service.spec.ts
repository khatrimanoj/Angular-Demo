import { TestBed } from '@angular/core/testing';

import { RegistrationStepTwoService } from './registration-step-two.service';

describe('RegistrationStepTwoService', () => {
  let service: RegistrationStepTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationStepTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

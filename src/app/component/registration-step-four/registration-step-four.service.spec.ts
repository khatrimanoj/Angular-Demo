import { TestBed } from '@angular/core/testing';

import { RegistrationStepFourService } from './registration-step-four.service';

describe('RegistrationStepFourService', () => {
  let service: RegistrationStepFourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationStepFourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

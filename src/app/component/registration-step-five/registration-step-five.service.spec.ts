import { TestBed } from '@angular/core/testing';

import { RegistrationStepFiveService } from './registration-step-five.service';

describe('RegistrationStepFiveService', () => {
  let service: RegistrationStepFiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationStepFiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

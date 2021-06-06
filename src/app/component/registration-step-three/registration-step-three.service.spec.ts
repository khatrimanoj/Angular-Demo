import { TestBed } from '@angular/core/testing';

import { RegistrationStepThreeService } from './registration-step-three.service';

describe('RegistrationStepThreeService', () => {
  let service: RegistrationStepThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationStepThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

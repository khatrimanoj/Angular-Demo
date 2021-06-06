import { TestBed } from '@angular/core/testing';

import { LoginTwoService } from './login-two.service';

describe('LoginTwoService', () => {
  let service: LoginTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

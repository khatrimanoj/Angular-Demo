import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStepFiveComponent } from './registration-step-five.component';

describe('RegistrationStepFiveComponent', () => {
  let component: RegistrationStepFiveComponent;
  let fixture: ComponentFixture<RegistrationStepFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationStepFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationStepFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

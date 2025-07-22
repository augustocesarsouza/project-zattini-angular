import { TestBed } from '@angular/core/testing';

import { SendClickedButtonContinueRegisterService } from './send-clicked-button-continue-register.service';

describe('SendClickedButtonContinueRegisterService', () => {
  let service: SendClickedButtonContinueRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendClickedButtonContinueRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

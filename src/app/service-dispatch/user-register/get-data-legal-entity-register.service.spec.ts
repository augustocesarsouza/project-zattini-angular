import { TestBed } from '@angular/core/testing';

import { GetDataLegalEntityRegisterService } from './get-data-legal-entity-register.service';

describe('GetDataLegalEntityRegisterService', () => {
  let service: GetDataLegalEntityRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataLegalEntityRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

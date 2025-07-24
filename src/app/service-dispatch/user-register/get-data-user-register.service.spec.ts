import { TestBed } from '@angular/core/testing';

import { GetDataUserRegisterService } from './get-data-user-register.service';

describe('GetDataUserRegisterService', () => {
  let service: GetDataUserRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataUserRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { WidthCreateAccountIsLessThan1035Service } from './width-create-account-is-less-than-1035.service';

describe('WidthCreateAccountIsLessThan1035Service', () => {
  let service: WidthCreateAccountIsLessThan1035Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidthCreateAccountIsLessThan1035Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

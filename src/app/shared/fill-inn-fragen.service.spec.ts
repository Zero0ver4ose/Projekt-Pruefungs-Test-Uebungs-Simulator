import { TestBed } from '@angular/core/testing';

import { FillInnFragenService } from './fill-inn-fragen.service';

describe('FillInnFragenService', () => {
  let service: FillInnFragenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillInnFragenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SingleChoiceFragenService } from './single-choice-fragen.service';

describe('SingleChoiceFragenService', () => {
  let service: SingleChoiceFragenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleChoiceFragenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

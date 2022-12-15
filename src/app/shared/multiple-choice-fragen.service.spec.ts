import { TestBed } from '@angular/core/testing';

import { MultipleChoiceFragenService } from './multiple-choice-fragen.service';

describe('MultipleChoiceFragenService', () => {
  let service: MultipleChoiceFragenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleChoiceFragenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

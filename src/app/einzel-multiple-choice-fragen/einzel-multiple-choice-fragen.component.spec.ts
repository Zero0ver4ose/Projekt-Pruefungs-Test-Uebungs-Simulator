import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinzelMultipleChoiceFragenComponent } from './einzel-multiple-choice-fragen.component';

describe('EinzelMultipleChoiceFragenComponent', () => {
  let component: EinzelMultipleChoiceFragenComponent;
  let fixture: ComponentFixture<EinzelMultipleChoiceFragenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinzelMultipleChoiceFragenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinzelMultipleChoiceFragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinzelSingleChoiceFragenComponent } from './einzel-single-choice-fragen.component';

describe('EinzelSingleChoiceFragenComponent', () => {
  let component: EinzelSingleChoiceFragenComponent;
  let fixture: ComponentFixture<EinzelSingleChoiceFragenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinzelSingleChoiceFragenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinzelSingleChoiceFragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

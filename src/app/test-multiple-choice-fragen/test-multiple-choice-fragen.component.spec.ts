import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMultipleChoiceFragenComponent } from './test-multiple-choice-fragen.component';

describe('TestMultipleChoiceFragenComponent', () => {
  let component: TestMultipleChoiceFragenComponent;
  let fixture: ComponentFixture<TestMultipleChoiceFragenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMultipleChoiceFragenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMultipleChoiceFragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

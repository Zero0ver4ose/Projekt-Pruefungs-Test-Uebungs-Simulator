import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmodusSingleChoiceFragenComponent } from './testmodus-single-choice-fragen.component';

describe('TestmodusSingleChoiceFragenComponent', () => {
  let component: TestmodusSingleChoiceFragenComponent;
  let fixture: ComponentFixture<TestmodusSingleChoiceFragenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestmodusSingleChoiceFragenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestmodusSingleChoiceFragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

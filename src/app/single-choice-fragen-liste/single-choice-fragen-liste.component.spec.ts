import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChoiceFragenListeComponent } from './single-choice-fragen-liste.component';

describe('SingleChoiceFragenListeComponent', () => {
  let component: SingleChoiceFragenListeComponent;
  let fixture: ComponentFixture<SingleChoiceFragenListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleChoiceFragenListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleChoiceFragenListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

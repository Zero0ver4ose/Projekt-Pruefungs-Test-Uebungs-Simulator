import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChoiceFragenListeComponent } from './multi-choice-fragen-liste.component';

describe('MultiChoiceFragenListeComponent', () => {
  let component: MultiChoiceFragenListeComponent;
  let fixture: ComponentFixture<MultiChoiceFragenListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiChoiceFragenListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiChoiceFragenListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

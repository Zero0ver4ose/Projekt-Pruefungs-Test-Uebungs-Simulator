import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruefungStartenComponent } from './pruefung-starten.component';

describe('PruefungStartenComponent', () => {
  let component: PruefungStartenComponent;
  let fixture: ComponentFixture<PruefungStartenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruefungStartenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruefungStartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

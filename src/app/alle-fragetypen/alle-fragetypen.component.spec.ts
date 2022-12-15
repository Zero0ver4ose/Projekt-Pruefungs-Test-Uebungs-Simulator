import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlleFragetypenComponent } from './alle-fragetypen.component';

describe('AlleFragetypenComponent', () => {
  let component: AlleFragetypenComponent;
  let fixture: ComponentFixture<AlleFragetypenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlleFragetypenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlleFragetypenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

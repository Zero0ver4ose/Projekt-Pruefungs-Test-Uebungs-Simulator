import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinzelAnsichtFillInnFragenComponent } from './einzel-ansicht-fill-inn-fragen.component';

describe('EinzelAnsichtFillInnFragenComponent', () => {
  let component: EinzelAnsichtFillInnFragenComponent;
  let fixture: ComponentFixture<EinzelAnsichtFillInnFragenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinzelAnsichtFillInnFragenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinzelAnsichtFillInnFragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillInnFragenComponent } from './fill-inn-fragen.component';

describe('FillInnFragenComponent', () => {
  let component: FillInnFragenComponent;
  let fixture: ComponentFixture<FillInnFragenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillInnFragenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillInnFragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

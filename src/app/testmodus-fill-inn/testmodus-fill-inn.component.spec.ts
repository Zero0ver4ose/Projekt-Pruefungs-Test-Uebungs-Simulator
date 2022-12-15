import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmodusFillInnComponent } from './testmodus-fill-inn.component';

describe('TestmodusFillInnComponent', () => {
  let component: TestmodusFillInnComponent;
  let fixture: ComponentFixture<TestmodusFillInnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestmodusFillInnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestmodusFillInnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

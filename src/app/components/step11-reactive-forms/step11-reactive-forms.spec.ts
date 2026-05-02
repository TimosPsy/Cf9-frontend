import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step11ReactiveForms } from './step11-reactive-forms';

describe('Step11ReactiveForms', () => {
  let component: Step11ReactiveForms;
  let fixture: ComponentFixture<Step11ReactiveForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step11ReactiveForms],
    }).compileComponents();

    fixture = TestBed.createComponent(Step11ReactiveForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

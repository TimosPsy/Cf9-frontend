import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step10TemplateDrivenForms } from './step10-template-driven-forms';

describe('Step10TemplateDrivenForms', () => {
  let component: Step10TemplateDrivenForms;
  let fixture: ComponentFixture<Step10TemplateDrivenForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step10TemplateDrivenForms],
    }).compileComponents();

    fixture = TestBed.createComponent(Step10TemplateDrivenForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step9ComponentOutput } from './step9-component-output';

describe('Step9ComponentOutput', () => {
  let component: Step9ComponentOutput;
  let fixture: ComponentFixture<Step9ComponentOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step9ComponentOutput],
    }).compileComponents();

    fixture = TestBed.createComponent(Step9ComponentOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

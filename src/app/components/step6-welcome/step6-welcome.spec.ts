import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step6Welcome } from './step6-welcome';

describe('Step6Welcome', () => {
  let component: Step6Welcome;
  let fixture: ComponentFixture<Step6Welcome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step6Welcome],
    }).compileComponents();

    fixture = TestBed.createComponent(Step6Welcome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

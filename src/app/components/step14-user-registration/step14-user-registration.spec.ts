import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step14UserRegistration } from './step14-user-registration';

describe('Step14UserRegistration', () => {
  let component: Step14UserRegistration;
  let fixture: ComponentFixture<Step14UserRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step14UserRegistration],
    }).compileComponents();

    fixture = TestBed.createComponent(Step14UserRegistration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

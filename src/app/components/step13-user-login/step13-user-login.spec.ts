import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step13UserLogin } from './step13-user-login';

describe('Step13UserLogin', () => {
  let component: Step13UserLogin;
  let fixture: ComponentFixture<Step13UserLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step13UserLogin],
    }).compileComponents();

    fixture = TestBed.createComponent(Step13UserLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonReactiveForm } from './person-reactive-form';

describe('PersonReactiveForm', () => {
  let component: PersonReactiveForm;
  let fixture: ComponentFixture<PersonReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonReactiveForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonReactiveForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step7ListGroupMenu } from './step7-list-group-menu';

describe('Step7ListGroupMenu', () => {
  let component: Step7ListGroupMenu;
  let fixture: ComponentFixture<Step7ListGroupMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step7ListGroupMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(Step7ListGroupMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step8SimpleDataTableShow } from './step8-simple-data-table-show';

describe('Step8SimpleDataTableShow', () => {
  let component: Step8SimpleDataTableShow;
  let fixture: ComponentFixture<Step8SimpleDataTableShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step8SimpleDataTableShow],
    }).compileComponents();

    fixture = TestBed.createComponent(Step8SimpleDataTableShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

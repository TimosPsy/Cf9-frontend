import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step8SimpleDataTable } from './step8-simple-data-table';

describe('Step8SimpleDataTable', () => {
  let component: Step8SimpleDataTable;
  let fixture: ComponentFixture<Step8SimpleDataTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step8SimpleDataTable],
    }).compileComponents();

    fixture = TestBed.createComponent(Step8SimpleDataTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step12HttpClientService } from './step12-http-client-service';

describe('Step12HttpClientService', () => {
  let component: Step12HttpClientService;
  let fixture: ComponentFixture<Step12HttpClientService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step12HttpClientService],
    }).compileComponents();

    fixture = TestBed.createComponent(Step12HttpClientService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

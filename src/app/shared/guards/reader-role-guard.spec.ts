import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { readerRoleGuard } from './reader-role-guard';

describe('readerRoleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => readerRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

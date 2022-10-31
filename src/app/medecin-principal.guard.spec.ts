import { TestBed } from '@angular/core/testing';

import { MedecinPrincipalGuard } from './medecin-principal.guard';

describe('MedecinPrincipalGuard', () => {
  let guard: MedecinPrincipalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MedecinPrincipalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

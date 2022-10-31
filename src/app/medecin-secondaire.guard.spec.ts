import { TestBed } from '@angular/core/testing';

import { MedecinSecondaireGuard } from './medecin-secondaire.guard';

describe('MedecinSecondaireGuard', () => {
  let guard: MedecinSecondaireGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MedecinSecondaireGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSecretaireComponent } from './profil-secretaire.component';

describe('ProfilSecretaireComponent', () => {
  let component: ProfilSecretaireComponent;
  let fixture: ComponentFixture<ProfilSecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilSecretaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

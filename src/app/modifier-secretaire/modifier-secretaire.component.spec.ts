import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSecretaireComponent } from './modifier-secretaire.component';

describe('ModifierSecretaireComponent', () => {
  let component: ModifierSecretaireComponent;
  let fixture: ComponentFixture<ModifierSecretaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSecretaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSecretaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

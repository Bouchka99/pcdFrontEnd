import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinSecondaireComponent } from './medecin-secondaire.component';

describe('MedecinSecondaireComponent', () => {
  let component: MedecinSecondaireComponent;
  let fixture: ComponentFixture<MedecinSecondaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinSecondaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinSecondaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

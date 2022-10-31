import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMedecinSecondaireComponent } from './navbar-medecin-secondaire.component';

describe('NavbarMedecinSecondaireComponent', () => {
  let component: NavbarMedecinSecondaireComponent;
  let fixture: ComponentFixture<NavbarMedecinSecondaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMedecinSecondaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMedecinSecondaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

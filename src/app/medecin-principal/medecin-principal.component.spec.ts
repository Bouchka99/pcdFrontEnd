import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinPrincipalComponent } from './medecin-principal.component';

describe('MedecinPrincipalComponent', () => {
  let component: MedecinPrincipalComponent;
  let fixture: ComponentFixture<MedecinPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

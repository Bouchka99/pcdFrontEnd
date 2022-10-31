import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilTherapieComponent } from './profil-therapie.component';

describe('ProfilTherapieComponent', () => {
  let component: ProfilTherapieComponent;
  let fixture: ComponentFixture<ProfilTherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilTherapieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilTherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

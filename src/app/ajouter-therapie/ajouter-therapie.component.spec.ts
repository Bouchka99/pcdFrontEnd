import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTherapieComponent } from './ajouter-therapie.component';

describe('AjouterTherapieComponent', () => {
  let component: AjouterTherapieComponent;
  let fixture: ComponentFixture<AjouterTherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTherapieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

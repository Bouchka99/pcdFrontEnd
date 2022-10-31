import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTherapieComponent } from './modifier-therapie.component';

describe('ModifierTherapieComponent', () => {
  let component: ModifierTherapieComponent;
  let fixture: ComponentFixture<ModifierTherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTherapieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

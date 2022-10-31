import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapieHomeComponent } from './therapie-home.component';

describe('TherapieHomeComponent', () => {
  let component: TherapieHomeComponent;
  let fixture: ComponentFixture<TherapieHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapieHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

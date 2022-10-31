import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTherapieComponent } from './liste-therapie.component';

describe('ListeTherapieComponent', () => {
  let component: ListeTherapieComponent;
  let fixture: ComponentFixture<ListeTherapieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTherapieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTherapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

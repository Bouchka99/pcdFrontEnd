import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterhistoriqueComponent } from './consulterhistorique.component';

describe('ConsulterhistoriqueComponent', () => {
  let component: ConsulterhistoriqueComponent;
  let fixture: ComponentFixture<ConsulterhistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterhistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterhistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

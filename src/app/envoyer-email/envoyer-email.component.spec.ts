import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyerEmailComponent } from './envoyer-email.component';

describe('EnvoyerEmailComponent', () => {
  let component: EnvoyerEmailComponent;
  let fixture: ComponentFixture<EnvoyerEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyerEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoyerEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

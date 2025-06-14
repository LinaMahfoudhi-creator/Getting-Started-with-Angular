import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Embauche } from './embauche';

describe('Embauche', () => {
  let component: Embauche;
  let fixture: ComponentFixture<Embauche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Embauche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Embauche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

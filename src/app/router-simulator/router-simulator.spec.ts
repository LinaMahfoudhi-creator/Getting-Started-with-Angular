import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterSimulator } from './router-simulator';

describe('RouterSimulator', () => {
  let component: RouterSimulator;
  let fixture: ComponentFixture<RouterSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterSimulator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterSimulator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCv } from './detail-cv';

describe('DetailCv', () => {
  let component: DetailCv;
  let fixture: ComponentFixture<DetailCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

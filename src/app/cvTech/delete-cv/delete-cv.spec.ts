import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCv } from './delete-cv';

describe('DeleteCv', () => {
  let component: DeleteCv;
  let fixture: ComponentFixture<DeleteCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

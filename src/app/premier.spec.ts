import { TestBed } from '@angular/core/testing';

import { Premier } from './premier';

describe('Premier', () => {
  let service: Premier;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Premier);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

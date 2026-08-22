import { TestBed } from '@angular/core/testing';

import { ControlvisibleService } from './controlvisible.service';

describe('ControlvisibleService', () => {
  let service: ControlvisibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlvisibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

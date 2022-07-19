import { TestBed } from '@angular/core/testing';

import { TosoService } from './toso.service';

describe('TosoService', () => {
  let service: TosoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TosoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

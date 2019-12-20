import { TestBed } from '@angular/core/testing';

import { StuffyService } from './stuffy.service';

describe('StuffyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StuffyService = TestBed.get(StuffyService);
    expect(service).toBeTruthy();
  });
});

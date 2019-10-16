import { TestBed } from '@angular/core/testing';

import { CoreFilterService } from './core-filter.service';

describe('CoreFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreFilterService = TestBed.get(CoreFilterService);
    expect(service).toBeTruthy();
  });
});

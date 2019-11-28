import { TestBed } from '@angular/core/testing';

import { StatisticalFormUtilityService } from './statistical-form-utility.service';

describe('StatisticalFormUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatisticalFormUtilityService = TestBed.get(StatisticalFormUtilityService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StatisticsFormCreatorService } from './statistics-form-creator.service';

describe('StatisticsFormCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatisticsFormCreatorService = TestBed.get(StatisticsFormCreatorService);
    expect(service).toBeTruthy();
  });
});

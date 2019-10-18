import { TestBed } from '@angular/core/testing';

import { StatisticalAnalysisResultService } from './statistical-analysis-result.service';

describe('StatisticalAnalysisResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatisticalAnalysisResultService = TestBed.get(StatisticalAnalysisResultService);
    expect(service).toBeTruthy();
  });
});

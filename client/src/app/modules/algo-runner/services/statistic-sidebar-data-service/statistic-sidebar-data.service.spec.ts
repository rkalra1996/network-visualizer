import { TestBed } from '@angular/core/testing';

import { StatisticSidebarDataService } from './statistic-sidebar-data.service';

describe('StatisticSidebarDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatisticSidebarDataService = TestBed.get(StatisticSidebarDataService);
    expect(service).toBeTruthy();
  });
});

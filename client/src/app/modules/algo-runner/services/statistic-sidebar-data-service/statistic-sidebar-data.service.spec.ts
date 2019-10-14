import { TestBed } from '@angular/core/testing';

import { StatisticSidebarDataService } from './statistic-sidebar-data.service';

describe('StatisticSidebarDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatisticSidebarDataService = TestBed.get(StatisticSidebarDataService);
    expect(service).toBeTruthy();
  });
});

describe('Statistic sidebar service', () => {
  let service: StatisticSidebarDataService;
  beforeEach(() => { service = new StatisticSidebarDataService(); });
  it('List of algo length should be greter than zero', () => {
    expect(service.listOfAlgo.length).toBeGreaterThan(0);
  });
  it('List of algo should be type of array', () => {
    expect(Array.isArray(service.listOfAlgo)).toBe(true);
  });
  it('algoList$ should return a value from observable', (done: DoneFn) => {
    service.algoList$.subscribe(value => {
      expect(value).toEqual(service.listOfAlgo);
      done();
    });
  });
});
describe('Statistic sidebar data service using TestBed', () => {
  let service: StatisticSidebarDataService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [StatisticSidebarDataService] });
    service = TestBed.get(StatisticSidebarDataService);
  });
  it('List of algo length should be greter than zero', () => {
    expect(service.listOfAlgo.length).toBeGreaterThan(0);
  });
  it('List of algo should be type of array', () => {
    expect(Array.isArray(service.listOfAlgo)).toBe(true);
  });
  it('algoList$ should return a value from observable', (done: DoneFn) => {
    service.algoList$.subscribe(value => {
      expect(value).toEqual(service.listOfAlgo);
      done();
    });
  });
});

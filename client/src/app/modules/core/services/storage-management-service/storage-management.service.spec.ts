import { TestBed } from '@angular/core/testing';

import { StorageManagementService } from './storage-management.service';

describe('StorageManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageManagementService = TestBed.get(StorageManagementService);
    expect(service).toBeTruthy();
  });
});

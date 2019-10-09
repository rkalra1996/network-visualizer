import { TestBed } from '@angular/core/testing';

import { ToolbarSharedService } from './toolbar-shared.service';

describe('ToolbarSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolbarSharedService = TestBed.get(ToolbarSharedService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PackDetailService } from './pack-detail.service';

describe('PackDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackDetailService = TestBed.get(PackDetailService);
    expect(service).toBeTruthy();
  });
});

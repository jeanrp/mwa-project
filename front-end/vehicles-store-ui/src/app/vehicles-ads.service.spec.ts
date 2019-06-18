import { TestBed } from '@angular/core/testing';

import { VehiclesAdsService } from './vehicles-ads.service';

describe('VehiclesAdsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehiclesAdsService = TestBed.get(VehiclesAdsService);
    expect(service).toBeTruthy();
  });
});

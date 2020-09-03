import { TestBed } from '@angular/core/testing';

import { LaunchprogramService } from './launchprogram.service';

describe('LaunchprogramService', () => {
  let service: LaunchprogramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchprogramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service.service';

describe('Profile.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });
});

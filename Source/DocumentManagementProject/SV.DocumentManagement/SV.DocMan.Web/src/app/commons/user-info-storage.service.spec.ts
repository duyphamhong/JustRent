import { TestBed, inject } from '@angular/core/testing';

import { UserInfoStorageService } from './user-info-storage.service';

describe('UserInfoStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserInfoStorageService]
    });
  });

  it('should be created', inject([UserInfoStorageService], (service: UserInfoStorageService) => {
    expect(service).toBeTruthy();
  }));
});

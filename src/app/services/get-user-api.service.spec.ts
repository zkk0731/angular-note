import { TestBed } from '@angular/core/testing';

import { GetUserApiService } from './get-user-api.service';

describe('GetUserApiService', () => {
  let service: GetUserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

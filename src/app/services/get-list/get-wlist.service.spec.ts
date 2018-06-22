import { TestBed, inject } from '@angular/core/testing';

import { GetWlistService } from './get-wlist.service';

describe('GetWlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWlistService]
    });
  });

  it('should be created', inject([GetWlistService], (service: GetWlistService) => {
    expect(service).toBeTruthy();
  }));
});

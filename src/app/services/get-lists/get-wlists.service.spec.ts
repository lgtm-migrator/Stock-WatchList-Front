import { TestBed, inject } from '@angular/core/testing';

import { GetWlistsService } from './get-wlists.service';

describe('GetWlistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWlistsService]
    });
  });

  it('should be created', inject([GetWlistsService], (service: GetWlistsService) => {
    expect(service).toBeTruthy();
  }));
});

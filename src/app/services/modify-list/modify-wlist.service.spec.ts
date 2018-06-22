import { TestBed, inject } from '@angular/core/testing';

import { ModifyWlistService } from './modify-wlist.service';

describe('ModifyWlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModifyWlistService]
    });
  });

  it('should be created', inject([ModifyWlistService], (service: ModifyWlistService) => {
    expect(service).toBeTruthy();
  }));
});

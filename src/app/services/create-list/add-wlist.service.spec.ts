import { TestBed, inject } from '@angular/core/testing';

import { AddWListService } from './add-wlist.service';

describe('AddWListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddWListService]
    });
  });

  it('should be created', inject([AddWListService], (service: AddWListService) => {
    expect(service).toBeTruthy();
  }));
});

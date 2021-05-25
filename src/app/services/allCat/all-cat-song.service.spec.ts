import { TestBed } from '@angular/core/testing';

import { AllCatSongService } from './all-cat-song.service';

describe('AllCatSongService', () => {
  let service: AllCatSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCatSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

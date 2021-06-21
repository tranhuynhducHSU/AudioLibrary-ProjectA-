import { TestBed } from '@angular/core/testing';

import { ArtitsService } from './artits.service';

describe('ArtitsService', () => {
  let service: ArtitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ColorChangerService } from './color-changer.service';

describe('ColorChangerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorChangerService = TestBed.get(ColorChangerService);
    expect(service).toBeTruthy();
  });
});

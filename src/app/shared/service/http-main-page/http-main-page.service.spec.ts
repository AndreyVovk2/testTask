import { TestBed } from '@angular/core/testing';

import { HttpMainPageService } from './http-main-page.service';

describe('HttpMainPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpMainPageService = TestBed.get(HttpMainPageService);
    expect(service).toBeTruthy();
  });
});

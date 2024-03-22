import { TestBed } from '@angular/core/testing';

import { ServiceautoService } from './serviceauto.service';

describe('ServiceautoService', () => {
  let service: ServiceautoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceautoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { HttpclassInterceptor } from './httpclass.interceptor';

describe('HttpclassInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpclassInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpclassInterceptor = TestBed.inject(HttpclassInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

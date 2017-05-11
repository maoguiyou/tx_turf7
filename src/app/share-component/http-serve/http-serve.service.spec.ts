/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpServeService } from './http-serve.service';

describe('HttpServeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpServeService]
    });
  });

  it('should ...', inject([HttpServeService], (service: HttpServeService) => {
    expect(service).toBeTruthy();
  }));
});

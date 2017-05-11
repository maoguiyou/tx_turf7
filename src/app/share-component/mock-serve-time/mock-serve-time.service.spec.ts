/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockServeTimeService } from './mock-serve-time.service';

describe('MockServeTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockServeTimeService]
    });
  });

  it('should ...', inject([MockServeTimeService], (service: MockServeTimeService) => {
    expect(service).toBeTruthy();
  }));
});

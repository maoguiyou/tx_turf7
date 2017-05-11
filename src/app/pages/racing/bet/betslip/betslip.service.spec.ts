/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BetslipService } from './betslip.service.ts';

describe('BetslipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BetslipService]
    });
  });

  it('should ...', inject([BetslipService], (service: BetslipService) => {
    expect(service).toBeTruthy();
  }));
});

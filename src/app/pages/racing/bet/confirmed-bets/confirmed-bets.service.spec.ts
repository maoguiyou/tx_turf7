/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfirmedBetsService } from './confirmed-bets.service';

describe('ConfirmedBetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmedBetsService]
    });
  });

  it('should ...', inject([ConfirmedBetsService], (service: ConfirmedBetsService) => {
    expect(service).toBeTruthy();
  }));
});

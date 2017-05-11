/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PendingBetsService } from './pending-bets.service';

describe('PendingBetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PendingBetsService]
    });
  });

  it('should ...', inject([PendingBetsService], (service: PendingBetsService) => {
    expect(service).toBeTruthy();
  }));
});

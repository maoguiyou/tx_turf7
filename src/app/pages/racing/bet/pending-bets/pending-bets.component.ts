import { Component, OnInit } from '@angular/core';
import { PendingBetsService } from './pending-bets.service';

@Component({
  selector: 'app-pending-bets',
  templateUrl: './pending-bets.component.html',
  styleUrls: ['./pending-bets.component.scss']
})
export class PendingBetsComponent implements OnInit {

  constructor(private pendingBetsService: PendingBetsService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ConfirmedBetsService } from './confirmed-bets.service';

@Component({
  selector: 'app-confirmed-bets',
  templateUrl: './confirmed-bets.component.html',
  styleUrls: ['./confirmed-bets.component.scss']
})
export class ConfirmedBetsComponent implements OnInit {

  constructor(private confirmedBetsService: ConfirmedBetsService) { }

  ngOnInit() {
  }

}

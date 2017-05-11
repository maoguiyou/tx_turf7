import { Component, OnInit } from '@angular/core';

import { MockServeTimeService } from '../../share-component/mock-serve-time/mock-serve-time.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private mockServeTimeService: MockServeTimeService) { }

  private serveTime:any;
  ngOnInit() {

  }
  ngDoCheck(){
    this.serveTime=this.mockServeTimeService.serveTime;
  }

}

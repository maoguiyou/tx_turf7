import { Component, OnInit } from '@angular/core';

import { HttpServeService } from '../../../share-component/http-serve/http-serve.service';
import { MockServeTimeService } from '../../../share-component/mock-serve-time/mock-serve-time.service';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
  constructor(
    private httpServeService: HttpServeService,
    private mockServeTimeService: MockServeTimeService
  ) { }
  private upcomingList;
  ngOnInit() {
    this.httpServeService.getUpcomingData().then(data=>{
      console.log(data)
      this.upcomingList=data;
    });
    console.log(this.mockServeTimeService.serveTime)
  }

}

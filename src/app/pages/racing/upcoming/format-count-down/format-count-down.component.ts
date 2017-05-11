import { Component, OnInit,Input } from '@angular/core';
import { MockServeTimeService } from '../../../../share-component/mock-serve-time/mock-serve-time.service';
@Component({
  selector: 'app-format-count-down',
  templateUrl: './format-count-down.component.html',
  styleUrls: ['./format-count-down.component.scss']
})
export class FormatCountDownComponent implements OnInit {

  constructor(private mockServeTimeService: MockServeTimeService) { }
  @Input() endTime: any;
  @Input() status : any;
  private hour;
  private minutes;
  private second;
  private sign;
  ngOnInit() {

  }
  ngDoCheck(){
    //if(this.status=='OPEN'){
      let second=Math.round( (this.endTime - (this.mockServeTimeService.serveTime||Date.now()))/1000 );
      this.sign=second < 0 ? '-':'';//判断倒计时终点时间是否已过
      second=Math.abs(second);
      if(second<5*60){
        this.second=second%60;
        this.minutes=Math.floor(second/60) ;
        this.hour=void 0;
      }else if(5*60<=second&&second<30*60){
        this.second=this.hour=void 0;
        this.minutes=second/60;
      }else{
        this.second=this.minutes=void 0;
        this.hour=this.endTime;
      }
    //}

  }
}

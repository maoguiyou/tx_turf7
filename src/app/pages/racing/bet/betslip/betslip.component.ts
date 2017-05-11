import { Component,EventEmitter,Output} from '@angular/core';
import { BetslipService } from './betslip.service';
import { HttpServeService } from '../../../../share-component/http-serve/http-serve.service';
@Component({
  selector: 'app-betslip',
  templateUrl: './betslip.component.html',
  styleUrls: ['./betslip.component.scss']
})
export class BetslipComponent {
  constructor(
    private betslipService: BetslipService,
    private httpServeService: HttpServeService
  ) { }
  @Output() onPostBetslip = new EventEmitter<boolean>();
  postBetslip(){
    this.httpServeService.postBetslip(this.betslipService.betslipObj).then(data=>{
      this.onPostBetslip.emit(data);//下单成功后像父组件发射一个事件，用来更新成交单和挂单
    });
  }
}

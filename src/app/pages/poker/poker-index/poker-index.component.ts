import { Component, OnInit } from '@angular/core';
import { HttpServeService } from '../../../share-component/http-serve/http-serve.service';
import { SocketIoService } from '../../../share-component/socket-io/socket-io.service';
@Component({
  selector: 'app-poker-index',
  templateUrl: './poker-index.component.html',
  styleUrls: ['./poker-index.component.scss']
})
export class PokerIndexComponent implements OnInit {

  constructor(private httpServeService:HttpServeService,private socketIoService:SocketIoService) { }

  private pokerInfo;
  private betslipBet=[];
  private betslipEat=[];
  ngOnInit() {
    this.httpServeService.getPokerInfo().then(data=>{
      this.pokerInfo=data;
    });

    this.socketIoService.sendMessage("pokerInfo",'123');
    this.socketIoService.getMessage('pokerInfo').subscribe(data=>{
      this.pokerInfo=data;
      console.log(data)
    });
  }

  clickOdd(player,ticketType,odd){
    if(ticketType=='bet'){
      let repeatIndex=this.findRepeat(player,ticketType);
      if(repeatIndex==-1){
        this.betslipBet.push({"player":player,"ticketType":ticketType,"num":10,"odd":odd});
      }else{
        this.betslipBet.splice(repeatIndex,1);
      }
    }else{
      let repeatIndex=this.findRepeat(player,ticketType);
      if(repeatIndex==-1){
        this.betslipEat.push({"player":player,"ticketType":ticketType,"num":10,"odd":odd});
      }else{
        this.betslipEat.splice(repeatIndex,1);
      }
    }
  }

  //根据玩家和类型判断是否已存在betslip
  findRepeat(player,ticketType){
    let repeatIndex=-1;
    if(ticketType=='bet'){
      this.betslipBet.filter((item,index)=>{
        if(item.ticketType==ticketType && item.player==player){
          repeatIndex=index;
        }
      });
    }else{
      //遍历查看betslip是否已存在这个单子
      this.betslipEat.filter((item,index)=>{
        if(item.ticketType==ticketType && item.player==player){
          repeatIndex=index;
        }
      });
    }
    return repeatIndex;
  }
//下注方法
  bets(){
    let betslip=this.betslipBet.concat(this.betslipEat);
    betslip.map(item=>{
      if(Math.random()>0.5){
        this.pokerInfo.comfirmBet.push(item);
      }else{
        this.pokerInfo.penddingBet.push(item);
      }
    });
    this.betslipBet=[];
    this.betslipEat=[];
  }
  //计算盈利值
  public calculateLiability(){
    var liability=0;
    let betslipObj=this.betslipBet.concat(this.betslipEat);
    betslipObj.map((item)=>{
      var profit=0;
      if(item.ticketType=='bet'){
        profit=(item.odd-1)*item.num;
      }else{
        profit=+item.num;
      }
      liability+=profit;
      return item;//不改变数组
    });
    return liability;
  }
}

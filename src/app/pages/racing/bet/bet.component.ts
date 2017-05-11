import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { HttpServeService } from '../../../share-component/http-serve/http-serve.service';
import { BetslipService } from './betslip/betslip.service';
import { ConfirmedBetsService } from './confirmed-bets/confirmed-bets.service';
import { PendingBetsService } from './pending-bets/pending-bets.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss'],
  providers: [ BetslipService,ConfirmedBetsService,PendingBetsService ],
})
export class BetComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpServeService: HttpServeService,
    private betslipService: BetslipService,
    private confirmedBetsService: ConfirmedBetsService,
    private pendingBetsService: PendingBetsService
  ) { }
  private gameInfo;//用户信息
  private gameDetails;
  private gameId;
  //遍历比赛信息
  private setChangeAtt(isRemove,data){
    for(var game in data){
      for(var runner in data[game].Runners){
        for(var odd in data[game].Runners[runner].Odds.Odds){
          var newOdds=data[game].Runners[runner].Odds.Odds[odd].Odds,
            newNum=data[game].Runners[runner].Odds.Odds[odd].Num,
            oldOdds=this.gameDetails[game].Runners[runner].Odds.Odds[odd].Odds,
            oldNum=this.gameDetails[game].Runners[runner].Odds.Odds[odd].Num;
          if(!isRemove){
            if(newOdds!=oldOdds||newNum!=oldNum){
              data[game].Runners[runner].Odds.Odds[odd].isChange=true;
            }
          }else{
            data[game].Runners[runner].Odds.Odds[odd].isChange=false;
          }
        }
      }
    }
  }
  ngOnInit() {
    //获取路由参数
    this.route.params
      .subscribe((params: Params) => {
        this.gameId=params['gameId'];
        console.log(this.gameId);
      });
    //获取用户余额信息
    this.httpServeService.getGameInfo(this.gameId).then(data=>{
      this.gameInfo=data;
      console.log(data);
    });
    //获取赔率信息
    this.httpServeService.getGameDetails(this.gameId).then(data=>{
      this.gameDetails=data;
    });
  }
  //update odds
  updateOdds(){
    this.httpServeService.getGameDetails(this.gameId).then(data=>{
      this.setChangeAtt(false,data);//执行方法对比赔率和票数是否发生变化
      this.gameDetails=data;
      setTimeout(()=>{
        this.setChangeAtt(true,this.gameDetails);//移除isChange属性
      },1000)
    });
  }
  //更新下单挂单
  updateBets(data){
    this.betslipService.clearBetslip();
    this.confirmedBetsService.confirmedBets=data.comfirmBets;
    this.pendingBetsService.pendingBets=data.pendingBets
  }

  //计算潜在风险值
  calculateRisk(gameId,runnerId,gameRules){
    var tax=0.005;//税率
    //合并已成交单子数组和正在下单数组，计算潜在风险值
    let betslipAndConfirm=this.betslipService.betslipObj.concat(this.confirmedBetsService.confirmedBets);
    let winRist=0;//win场的风险值
    let placeRiskBet=0;//place 场的风险值,bet赢了
    let placeRiskEat=0;//place 场的风险值，eat赢了
    //遍历所有betslip和成交单
    betslipAndConfirm.map((item)=>{
      if(gameRules==1){//win场计算
        if(gameId==item.gameId && runnerId==item.runnerId){//计算下单成交单对自身的风险值得影响
          if(item.ticketType=='bet'){
            winRist=winRist + (item.odds-1)*item.num - (item.odds-1)*item.num*tax;
          }else{
            winRist=winRist - (item.odds-1)*item.num - (item.odds-1)*item.num*tax;
          }
        }else if(gameId==item.gameId){//计算其他马匹的成交单和betslip对风险值的影响
          if(item.ticketType=='bet'){
            winRist=winRist - item.num - item.num*tax;
          }else{
            winRist=winRist + item.num - item.num*tax;
          }
        }
      }else{//place场计算
        if(gameId==item.gameId && runnerId==item.runnerId){//place场的风险值计算不需要考虑其他马匹的影响
          if(item.ticketType=='bet'){
            placeRiskBet=placeRiskBet+ (item.odds-1)*item.num - (item.odds-1)*item.num*tax;
            placeRiskEat=placeRiskEat - item.num -  item.num*tax;
          }else{
            placeRiskBet=placeRiskBet- (item.odds-1)*item.num - (item.odds-1)*item.num*tax;
            placeRiskEat=placeRiskEat + item.num - item.num*tax;
          }
        }
      }
    })

    return {
      "winRist":winRist||void 0,
      "placeRiskBet":placeRiskBet||void 0,
      "placeRiskEat":placeRiskEat||void 0
    }

  }
}


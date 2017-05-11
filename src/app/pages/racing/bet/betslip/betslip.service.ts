import { Injectable } from '@angular/core';

@Injectable()
export class BetslipService {

  constructor() { }
  public betslipObj=[];//存放betslip的所有数据
  //用户点击赔率收集数据
  public clickOdd(gameId,gameRules,runnerId,runnerName,index,oddCell){
    var betslipItem={gameId:gameId,
      gameRules:gameRules,
      runnerId:runnerId,
      ticketType:oddCell.TicketType,
      index:index,
      odds:oddCell.Odds,
      num:10,
      runnerName:runnerName
    }
    var objIsRepeart=false;//用来判断obj是否以及存在 this.betslipObj对象中
    //遍历当前this.betslipObj对象，判断obj对象是否已经存在this.betslipObj对象中
    this.betslipObj=this.betslipObj.filter(function(item){
      //点击同一个玩法同一匹马同一个类型的赔率格子
      if(item.gameId==betslipItem.gameId && item.runnerId==betslipItem.runnerId && item.ticketType==betslipItem.ticketType){
        if(item.index===betslipItem.index){//点击同一个格子
          objIsRepeart=true;//同一匹马同一类型同一个赔率格子的数据移除，而且不把当前数据添加到this.betslipObj
        }
        return false;//同一匹马同一个类型的数据都移除
      }else{
        return item;
      }
    });
    if(!objIsRepeart){//当点击的赔率给子在this.betslipObj中不存在时，添加数据
      this.betslipObj.push(betslipItem);
    }
  }

  //判断某个赔率格子是否已经被点击
  oddShadow(gameId,runnerId,ticketType,index){
    var boolean=false;//同一个格子
    for(var i in this.betslipObj){
      var item=this.betslipObj[i];
      if(item.gameId==gameId && item.runnerId==runnerId && item.ticketType==ticketType && item.index===index){
        boolean=true;
      }
    }
    return boolean;
  }

  //计算盈利值
  public calculateLiability(){
    var liability=0;
    this.betslipObj.map((item)=>{
      var profit=0;
      if(item.ticketType=='bet'){
        profit=(item.odds-1)*item.num;
      }else{
        profit=+item.num;
      }
      liability+=profit;
      return item;//不改变数组
    });
    return liability;
  }

  //根据gameId,runnerId,ticketType,index删除数据
  public clearBetslip(gameId?:String,runnerId?:String,ticketType?:String,index?:Number){
    if(index==-1|| index===void 0){//删除全部
      this.betslipObj=[];
    }else if(gameId!=void 0 && runnerId!=void 0 && ticketType!=void 0 && index!=void 0){//删除具体某个单子
      this.betslipObj=this.betslipObj.filter(function(item){
        if(item.gameId==gameId && item.runnerId==runnerId && item.ticketType==ticketType && item.index===index){
          return false;
        }else{
          return item;
        }
      });
    }
  }
  //得到bet类型的单子或者eat类型的单子
  public filterBetslipObj(ticketType){
    var filterArray=[];
    this.betslipObj.map(function(item){
      if(ticketType===item.ticketType){
        filterArray.push(item);
      }
    });
    return filterArray;
  }

}

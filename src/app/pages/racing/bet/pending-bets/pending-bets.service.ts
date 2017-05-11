import { Injectable } from '@angular/core';

@Injectable()
export class PendingBetsService {

  constructor() { }
  public pendingBets=[];

  clearPendingBets(index?:number){
    if(index==void 0 || index==-1){
      this.pendingBets=[];
    }else{
      this.pendingBets.splice(index,1);//根据索引删除挂单
    }
  }
}

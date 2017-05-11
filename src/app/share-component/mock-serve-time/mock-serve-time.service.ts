import { Injectable } from '@angular/core';
import { HttpServeService } from '../../share-component/http-serve/http-serve.service';
@Injectable()  //标识这个类可以被注入器实例化
export class MockServeTimeService{
  public serveTime:number;
  constructor(private httpServeService: HttpServeService) {
    this.synServeTime();
  }

  synServeTime(){
    //异步获取服务器时间
    this.httpServeService.getServiceTime().then((serviceTime)=>{
      this.serveTime=serviceTime;
    });
    //定时器模拟服务器时间
    let timer;
    window.clearInterval(timer);
    timer=setInterval(()=>{
      this.serveTime+=1000;
    },1000);
  }
}

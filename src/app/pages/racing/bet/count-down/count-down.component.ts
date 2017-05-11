import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'count-down',
  template: `<span style="cursor: pointer;" (click)="toggleCountDown()" [hidden]="displayString==0">Refreshing in {{displayString}} second</span>
  <span [hidden]="displayString!=0">Refreshing Odds...</span>
  <button [disabled]="displayString==0" (click)="countDownEnd()">Refresh</button>
  <ng-content></ng-content>
  `
})


export class CountDownComponent implements OnInit {
  @Input() displayString: number;
  @Output() onEnd = new EventEmitter<any>();

  constructor() { }

  private timer;
  private timerIsActive:boolean;
  ngOnInit() {
    this.timerIsActive=true;
    setTimeout(()=>{
      this._displayString();
    },1000)
  }
  //倒计时函数
  _displayString(){
    let $this=this;
    $this.displayString--;
    if($this.displayString==0){
      window.clearTimeout($this.timer);//清楚定时器
      $this.timerIsActive=true;
      $this.onEnd.emit();//倒计时结束时，向父组件发射事件
    }else {
      $this.timer=setTimeout(()=>{
        $this._displayString();
      },1000);
    }
  }

  //强制倒计时结束
  countDownEnd(){
    window.clearTimeout(this.timer);//停止定时器
    this.displayString=0;
    this.onEnd.emit();//向父组件发射事件
  }

  //暂停/开始倒计时
  toggleCountDown(){
    if(this.timerIsActive){//如果定时器是正常工作的，停止倒计时
      window.clearTimeout(this.timer);
    }else{//启动倒计时
      this._displayString();
    }
   this.timerIsActive=!this.timerIsActive;
  }
}

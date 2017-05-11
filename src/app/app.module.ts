;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
//导入socket
import { SocketIoModule, SocketIoConfig, Socket} from 'ng2-socket-io';
//配置socket地址
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
//自定义模块
import { AppRoutingModule } from './app-routing/app-routing.module';
//公用组件
import { NavComponent } from './share-component/nav/nav.component';
import { UserInfoComponent } from './share-component/user-info/user-info.component';

//自定义服务
import { HttpServeService } from './share-component/http-serve/http-serve.service';
import { MockServeTimeService } from './share-component/mock-serve-time/mock-serve-time.service';
import { SocketIoService } from './share-component/socket-io/socket-io.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TermsComponent } from './pages/terms/terms.component';
import { IndexComponent } from './pages/racing/index/index.component';
import { UpcomingComponent } from './pages/racing/upcoming/upcoming.component';
import { FormatCountDownComponent } from './pages/racing/upcoming/format-count-down/format-count-down.component';
import { ArrangeComponent } from './pages/racing/arrange/arrange.component';
import { BetComponent } from './pages/racing/bet/bet.component';
import { BetslipComponent } from './pages/racing/bet/betslip/betslip.component';
import { PendingBetsComponent } from './pages/racing/bet/pending-bets/pending-bets.component';
import { ConfirmedBetsComponent } from './pages/racing/bet/confirmed-bets/confirmed-bets.component';
import { CountDownComponent } from './pages/racing/bet/count-down/count-down.component';
import { RacingResultComponent } from './pages/racing/racing-result/racing-result.component';
import { GameHelpComponent } from './pages/game-help/game-help.component';
import { MyAccComponent } from './pages/my-acc/my-acc.component';
import { CurrentBetComponent } from './pages/current-bet/current-bet.component';
import { WinLoseReportComponent } from './pages/win-lose-report/win-lose-report.component';
import { RacingResultsComponent } from './pages/racing-results/racing-results.component';
import { DrawHistoryComponent } from './pages/draw-history/draw-history.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ExchangeRateComponent } from './pages/exchange-rate/exchange-rate.component';
import { FourIndexComponent } from './pages/4D/four-index/four-index.component';
import { SixIndexComponent } from './pages/6D/six-index/six-index.component';
import { PokerIndexComponent } from './pages/poker/poker-index/poker-index.component';


@NgModule({
  declarations: [
    NavComponent,
    UserInfoComponent,
    AppComponent,
    LoginComponent,
    TermsComponent,
    IndexComponent,
    UpcomingComponent,
    FormatCountDownComponent,
    ArrangeComponent,
    BetComponent,
    BetslipComponent,
    PendingBetsComponent,
    ConfirmedBetsComponent,
    CountDownComponent,
    RacingResultComponent,
    GameHelpComponent,
    MyAccComponent,
    CurrentBetComponent,
    WinLoseReportComponent,
    RacingResultsComponent,
    DrawHistoryComponent,
    ChangePasswordComponent,
    ExchangeRateComponent,
    FourIndexComponent,
    SixIndexComponent,
    PokerIndexComponent,
    PokerIndexComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [HttpServeService,MockServeTimeService,SocketIoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

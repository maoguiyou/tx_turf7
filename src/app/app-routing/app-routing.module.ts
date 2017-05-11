import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../pages/login/login.component';
import { TermsComponent } from '../pages/terms/terms.component';
import { IndexComponent } from '../pages/racing/index/index.component';
import { BetComponent } from '../pages/racing/bet/bet.component';
import { RacingResultComponent } from '../pages/racing/racing-result/racing-result.component';
import { GameHelpComponent } from '../pages/game-help/game-help.component';
import { MyAccComponent } from '../pages/my-acc/my-acc.component';
import { ChangePasswordComponent } from '../pages/change-password/change-password.component';
import { CurrentBetComponent } from '../pages/current-bet/current-bet.component';
import { DrawHistoryComponent } from '../pages/draw-history/draw-history.component';
import { ExchangeRateComponent } from '../pages/exchange-rate/exchange-rate.component';
import { WinLoseReportComponent } from '../pages/win-lose-report/win-lose-report.component';
import { RacingResultsComponent } from '../pages/racing-results/racing-results.component';
import { FourIndexComponent } from '../pages/4D/four-index/four-index.component';
import { SixIndexComponent } from '../pages/6D/six-index/six-index.component';
import { PokerIndexComponent } from '../pages/poker/poker-index/poker-index.component';

import {from} from "rxjs/observable/from";

//路由定义顺序使用先匹配者优先的策略（具体路由在前面，通用路由在后面见）
const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'terms',  component: TermsComponent },
  { path: 'racing',  component: IndexComponent },
  { path: 'game-help',  component: GameHelpComponent },
  { path: 'racing/racing-result',  component: RacingResultComponent },
  { path: 'racing/bet/:gameId',  component: BetComponent },
  { path: 'my-acc',  component: MyAccComponent },
  { path: 'change-password',  component: ChangePasswordComponent },
  { path: 'current-bet',  component: CurrentBetComponent },
  { path: 'draw-history',  component: DrawHistoryComponent },
  { path: 'exchange-rate',  component: ExchangeRateComponent },
  { path: 'winLose-report',  component: WinLoseReportComponent },
  { path: 'racing-results',  component: RacingResultsComponent },
  { path: 'four',  component: FourIndexComponent },
  { path: 'six',  component: SixIndexComponent },
  { path: 'poker',  component: PokerIndexComponent },
  { path: '**',     component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

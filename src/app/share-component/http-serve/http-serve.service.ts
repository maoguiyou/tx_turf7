import { Injectable } from '@angular/core';
import { Response, Http,Jsonp, Headers, RequestOptions,URLSearchParams  } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServeService {
  private heroesUrl = 'http://agency.staging.com/System/RacingCurrentMarket/en-us?type=1';  // URL to web api

  constructor(
    private http: Http,
    private jsonp:Jsonp
  ) { }
  //get请求
  httpGet(url, params?) {
    return this.http.get(url, {search: params})
      .map(this.extractData)
      .catch(this.handleError);
  }
  //post请求
  httpPost(url, data) {
    return this.http.post(url, data)
      .map(this.extractData)
      .catch(this.handleError);
  }
  //jsonp请求
  jsonpGet(url, params) {
    return this.jsonp.get(url, {search: params})
      .map(this.extractData)
      .catch(this.handleError);
  }

//  获取比赛信息
  getGameInfo(gameId):Promise<any>{
    let url = 'http://localhost:3000';
    let params = new URLSearchParams();
    params.set("gameId",gameId);
    return new Promise((resolve)=>{
      this.httpGet(url,params).subscribe(data=>{
        resolve(data.RacingBet.Game);
      });
    });
  }

//  获取选手信息，赔率信息
  getGameDetails(gameId):Promise<any>{
    let url = 'http://localhost:3000';
    let params = new URLSearchParams();
    params.set("gameId",gameId);
    return new Promise((resolve)=>{
      this.httpGet(url,params).subscribe(data=>{
        resolve(data.RacingBet.GameDetails);
      });
    });
  }

  //  获取upcoming信息
  getUpcomingData():Promise<any>{
    let url = 'http://localhost:3000/upcoming';
    return new Promise((resolve)=>{
      this.httpGet(url,'').subscribe(data=>{
        resolve(data);
      });
    });
  }

  //下单
  postBetslip(betslipObj):Promise<any>{
    return new Promise((resolve)=>{
      let wikiUrl = 'http://localhost:3000/betslip';
      this.httpPost(wikiUrl,{"betslip":betslipObj })
        .subscribe((data) => {
          console.log(data);
          resolve(data);
        });

    });
  }

  //获取服务器时间
  getServiceTime():Promise<any>{
    let url = 'http://localhost:3000/servetime';
    return new Promise((resolve)=>{
      this.httpGet(url).subscribe(data=>{
        resolve(data.serveTime);
      });
    });
  }

  //poker
  //获取poker游戏信息
  getPokerInfo():Promise<any>{
    let url='http://localhost:3000/poker';
    return new Promise((resolve)=>{
      this.httpGet(url).subscribe(data=>{
        resolve(data);
      })
    })
  }

  //请求成功的处理函数
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }
  //请求失败的处理函数
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

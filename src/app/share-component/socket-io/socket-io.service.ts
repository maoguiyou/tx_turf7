import { Injectable } from '@angular/core';

import { Socket } from 'ng2-socket-io';

@Injectable()
export class SocketIoService {

  constructor(private socket: Socket) { }

  sendMessage(event:string,msg: string){
    this.socket.emit(event, msg);
  }

  getMessage(event:string) {
    return this.socket
      .fromEvent(event)
      .map( data => data );
  }

}

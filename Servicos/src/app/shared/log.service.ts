import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  consoleLog(mensagem: string)
  {
    console.log(mensagem);
  }

}

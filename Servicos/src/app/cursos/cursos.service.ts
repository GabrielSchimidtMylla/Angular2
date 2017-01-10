import { Injectable, EventEmitter} from "@angular/core";

import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService
{
    //Para instancias de servico diferentes utilizamos este evento
    //para notificar os intereçados da alteração realizada no serviço.
    //Broadcast
    static emitirCursoCriado = new EventEmitter<string>();

    private cursos: string[] = ["Angular 2", "C#", "Cordova"];

    constructor(private _logService: LogService){

    }

    getCursos()
    {
        this._logService.consoleLog("Recebendo Lista de cursos");
        return this.cursos;
    }

    addCurso(value)
    {
        this._logService.consoleLog(`Criando um curso: ${value}`);
        this.cursos.push(value);
        CursosService.emitirCursoCriado.emit(value);
    }
}
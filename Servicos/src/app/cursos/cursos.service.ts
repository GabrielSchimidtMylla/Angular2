import { Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class CursosService
{
    //Para instancias de servico diferentes utilizamos este evento
    //para notificar os intereçados da alteração realizada no serviço.
    //Broadcast
    static emitirCursoCriado = new EventEmitter<string>();

    private cursos: string[] = ["Angular 2", "C#", "Cordova"];

    getCursos()
    {
        return this.cursos;
    }

    addCurso(value)
    {
        this.cursos.push(value);
        CursosService.emitirCursoCriado.emit(value);
    }
}
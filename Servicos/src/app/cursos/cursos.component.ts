import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = new Array();

  constructor(private _cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();

    //Para instancias de servico diferentes utilizando o subscribe
    //podemos ser notificados de todas as alterações que acontecerem e forem lançadas no 
    //evento emit. Broadcast
    CursosService.emitirCursoCriado.subscribe(
      //Hero function: nova versão de declaração de função do ecmascript 6
      curso => console.log(curso)
    );
  }

}

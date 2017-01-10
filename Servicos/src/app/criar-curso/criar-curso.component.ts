import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [ CursosService ]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = new Array();

  constructor(private _cursoService: CursosService) { }

  ngOnInit() {
    this.cursos = this._cursoService.getCursos();

    //Para instancias de servico diferentes utilizando o subscribe
    //podemos ser notificados de todas as alterações que acontecerem e forem lançadas no 
    //evento emit.Broadcast
    CursosService.emitirCursoCriado.subscribe(
      //Hero function: nova versão de declaração de função do ecmascript 6
      curso => console.log(curso)
    );
  }

  addCurso(value)
  {
    this._cursoService.addCurso(value);
  }

}

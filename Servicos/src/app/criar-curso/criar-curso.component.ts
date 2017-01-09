import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = new Array();

  constructor(private _cursoService: CursosService) { }

  ngOnInit() {
    this.cursos = this._cursoService.getCursos();
  }

}

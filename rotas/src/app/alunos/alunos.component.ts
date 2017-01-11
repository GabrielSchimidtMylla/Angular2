import { Component, OnInit } from '@angular/core';

import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  private alunos: any[];

  constructor(private _alunosService: AlunoService) { }

  ngOnInit() {
    this.alunos = this._alunosService.getAlunos();
  }

}

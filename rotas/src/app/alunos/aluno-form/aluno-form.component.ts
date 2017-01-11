import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/rx';

import { AlunoService } from './../aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  titulo: string = "";
  aluno: any = {};
  inscricao: Subscription;

  constructor(private _alunoService: AlunoService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this.inscricao = this._router.params.subscribe((parms) => {
      let id = parms['id'];

      this.titulo = "Novo Aluno";

      if(id === null || id === undefined || id === "")
      {
        this.titulo = "Novo Aluno";
      }
      else
      {
        this.titulo = "Editar Aluno";
        this.aluno = this._alunoService.getAluno(parseInt(id));
      }

    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  } 

}

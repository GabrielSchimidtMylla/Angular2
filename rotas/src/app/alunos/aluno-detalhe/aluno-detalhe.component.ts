import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/rx';

import { AlunoService } from './../aluno.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;

  constructor(private _route: ActivatedRoute, private _alunoService: AlunoService, private _router: Router) { }

  ngOnInit() {
   this.inscricao = this._route.params.subscribe((params) => {
      this.aluno = this._alunoService.getAluno(parseInt(params["id"]));
    });
  }

  ngOnDestroy()
  {
    this.inscricao.unsubscribe();
  }

  editarAluno(){
    this._router.navigate(['/alunos', this.aluno.id, "edit"]);
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class AlunoService {

  private alunos: any[] = [
    { id: 1, nome: "Aluno 01", email:"aluno1@email.com" },
    { id: 2, nome: "Aluno 02", email:"aluno2@email.com" },
    { id: 3, nome: "Aluno 03", email:"aluno3@email.com" }
  ];

  constructor() { }

  getAlunos()
  {
    return this.alunos;
  }

  getAluno(id: number)
  {
    return this.getAlunos().filter((item) => item.id === id)[0];
  }

  novoAluno(aluno: any)
  {
    this.alunos.push(aluno);
  }

}

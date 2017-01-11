import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunoRoutingModule } from './aluno.routing.module';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoService } from './aluno.service';

@NgModule({
    imports: [
        CommonModule,
        AlunoRoutingModule,
        FormsModule
    ],
    exports: [ ],
    declarations: [ AlunosComponent, AlunoFormComponent, AlunoDetalheComponent ],
    providers: [ AlunoService ],
})
export class AlunoModule { }

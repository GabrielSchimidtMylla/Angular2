import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno.routing.module';
import { AlunosComponent } from './alunos.component';

@NgModule({
    imports: [
        CommonModule,
        AlunoRoutingModule
    ],
    exports: [ ],
    declarations: [ AlunosComponent ],
    providers: [],
})
export class AlunoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CursosRoutingModule } from './cursos.routing.module';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        CursosRoutingModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent
    ],
    providers: [ CursosService ],
})
export class CursosModule { }

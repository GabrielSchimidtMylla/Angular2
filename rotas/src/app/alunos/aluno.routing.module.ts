import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AlunosComponent } from './alunos.component';

const alunoRouter: Routes = [
    { path: "cursos", component: AlunosComponent }
];

@NgModule({
    imports:[
        RouterModule.forChild(alunoRouter)
    ],
    exports:[
        RouterModule
    ]
})
export class AlunoRoutingModule
{

}
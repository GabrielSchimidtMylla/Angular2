import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';


const appRoutes: Routes = [
    { path: "cursos", component: CursosComponent },
    { path: "curso/:id", component: CursoDetalheComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [ RouterModule ]
})
export class CursosRoutingModule
{

}
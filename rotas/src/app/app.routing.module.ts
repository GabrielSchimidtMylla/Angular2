import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Erro404Component } from './erro-404/erro-404.component';

//loadChildren: carrega os módulos sob demanda lazy loading
//loadChildren: Caminho completo do modulo mais "#" o nome da classe modulo
const appRoutes: Routes = [
    { path: "cursos", loadChildren: "app/cursos/cursos.module#CursosModule" },
    { path: "alunos", loadChildren: "app/alunos/aluno.module#AlunoModule" },
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "404", component: Erro404Component }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule
{

}
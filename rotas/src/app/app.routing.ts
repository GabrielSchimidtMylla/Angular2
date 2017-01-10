import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { Erro404Component } from './erro-404/erro-404.component';

const APP_ROUTES: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "cursos", component: CursosComponent },
    { path: "curso/:id", component: CursoDetalheComponent },
    { path: "404", component: Erro404Component }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
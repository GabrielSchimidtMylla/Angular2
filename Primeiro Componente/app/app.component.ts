import { Component } from '@angular/core';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { CursosComponent } from './cursos/cursos.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LifeCycleComponent } from './ciclo/life-cycle.component';


@Component({
    selector: 'my-app',
    template: `
        <!--<h1>Angular 2 Boilerplate</h1>
        <p>Hello World!!</p>
        <meu-primeiro-componente></meu-primeiro-componente>
        <cursos-lista></cursos-lista>
        <data-binding-componente></data-binding-componente>-->
        <life-cycle></life-cycle>
    `,
    directives: [ MeuPrimeiroComponent, CursosComponent, DataBindingComponent, LifeCycleComponent ]
})
export class AppComponent { }

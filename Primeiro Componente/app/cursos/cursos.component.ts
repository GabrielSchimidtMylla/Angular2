import { Component } from "@angular/core";

import { CursosService } from "./cursos.service";

@Component({
    moduleId: module.id, // Exigido atributo para usar templateUrl
    selector: "cursos-lista",
    // template: `
    //     <p>Meu nome é {{ nome }}</p>
    //     <ul>
    //         <li *ngFor="let curso of cursos">
    //             {{curso}}
    //         </li>
    //     </ul>
    // `
    templateUrl: "cursos.component.html",
    providers: [ CursosService ]
})
export class CursosComponent {

    nome :string = 'Gabriel';
    cursos :string[];

    constructor(cursosService: CursosService){        
        this.cursos = cursosService.getCursos();
    }
}
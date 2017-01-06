import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'curso',
    template: '{{ nomeCurso }}',
    inputs: [ "nomeCurso:nome" ]
})
export class InputPropertyComponent {

    //@Input() - Anotação que expoem a propriedade no componente para ser preechida.
    //"nome" - nome da propriedade que será exibida no componente.
    //@Input("nome") 
    nomeCurso: string = "";

    constructor() { }
}
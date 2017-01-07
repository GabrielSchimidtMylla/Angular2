import { Component } from '@angular/core';

import { InputPropertyComponent } from "./input-property.component";
import { OutputPropertyComponent} from "./output-property.component";

@Component({
    moduleId: module.id,
    selector: 'data-binding-componente',
    templateUrl: 'data-binding.component.html',
    // styles: [
    //     `
    //         .highlight
    //         {
    //             background-color: yellow;
    //             font-weight: bold;
    //         }
    //     `
    // ]
    styleUrls: ["data-binding.component.css"],
    directives: [ InputPropertyComponent, OutputPropertyComponent ]
})
export class DataBindingComponent {
    constructor() { }

    url = "http://www.curitibasoftware.com.br";
    urlImage = "http://lorempixel.com/400/200/";
    conteudoAtual :string = "";
    conteudoSalvo :string = "";
    isMouseOver :boolean = false;
    nome :string = "";
    pessoa :Object = {nome: "", idade: "18"};
    nomeCurso: string = "Curso Angular 2";

    onClick(){
        alert("Botão clicado!");
    }

    onKeyUp(event :KeyboardEvent)
    {
        console.log(event);

        // <HTMLInputElement> - casting para elemento de input html.
        this.conteudoAtual = (<HTMLInputElement>event.target).value;
    }

    onSave(value :string)
    {
        this.conteudoSalvo = value;
    }

    onMouseSpan()
    {
        this.isMouseOver = !this.isMouseOver;
    }

    onValorAlterado(event: any)
    {
        console.log(event);
    }
}
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'data-binding-componente',
    templateUrl: 'data-binding.component.html'
})
export class DataBindingComponent {
    constructor() { }

    url = "http://www.curitibasoftware.com.br";
    urlImage = "http://lorempixel.com/400/200/";
}
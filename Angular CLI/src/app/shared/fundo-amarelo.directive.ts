import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]' //Applicado a todos os elementos
  // selector: 'p[appFundoAmarelo]' //Applicado somente a paragrafo
  // selector: 'button[appFundoAmarelo]' //Applicado somente a button
})
export class FundoAmareloDirective {

  constructor(private _element: ElementRef, private _renderer: Renderer) { 
    //_element.nativeElement Evitar uso, quebra de segurança;
    //this._element.nativeElement.style.backgroundColor = "yellow";
    this._renderer.setElementStyle(this._element.nativeElement,"backgroundColor","yellow");
  }

}

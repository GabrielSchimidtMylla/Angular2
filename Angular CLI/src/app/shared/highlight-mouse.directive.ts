import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setElementStyle(this._element.nativeElement,"backgroundColor","yellow");
    this.backgroundColor = "yellow";
  };

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setElementStyle(this._element.nativeElement,"backgroundColor","#fff");
    this.backgroundColor = "white";
  };

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private _element: ElementRef, private _renderer: Renderer) { }

}

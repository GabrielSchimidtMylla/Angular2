import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() defaultColor: string = "white";
  @Input("appHighlight") highLightColor: string = "yellow";
  @HostBinding("style.backgroundColor") backgroundColor: string;

  @HostListener("mouseover") onMouseOver(){
    this.backgroundColor = this.highLightColor;
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}

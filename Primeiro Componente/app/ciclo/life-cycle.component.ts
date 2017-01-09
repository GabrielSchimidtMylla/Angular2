import {
    Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Input,
    ViewChild
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'life-cycle',
    template: `
        <p #variavelLocalP>{{ valorInicial }}</p>
        <p>{{ variavelLocalP.textContent }}</p>
    `
})
export class LifeCycleComponent implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

    @Input() valorInicial: number = 0;

    @ViewChild('variavelLocalP') variavelLocalP: HTMLElement;

    constructor() {
        this.log("Constructor");
     }

    ngOnInit() {
        this.log("ngOnInit");
        console.log(this.variavelLocalP);
    }

    ngOnChanges() {
        this.log("ngOnChanges");
    }

    ngDoCheck() {
        this.log("ngDoCheck");
    }

    ngAfterContentInit() {
        this.log("ngAfterContentInit");
    }

    ngAfterContentChecked() {
        this.log("ngAfterContentChecked");
    }

    ngAfterViewInit() {
        this.log("ngAfterViewInit");
    }

    ngOnDestroy() {
        this.log("ngOnDestroy");
    }

    ngAfterViewChecked() {
        this.log("ngAfterViewChecked");
    }

    private log(hooks :string)
    {
        console.log(hooks);
    }
}
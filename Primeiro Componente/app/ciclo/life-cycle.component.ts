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
    Input
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'life-cycle',
    template: `
        <p></p>
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
    constructor() {
        this.log("Constructor");
     }

    ngOnInit() {
        this.log("ngOnInit");
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
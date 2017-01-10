/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExemploPipesComponent } from './exemplo-pipes.component';

describe('ExemploPipesComponent', () => {
  let component: ExemploPipesComponent;
  let fixture: ComponentFixture<ExemploPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

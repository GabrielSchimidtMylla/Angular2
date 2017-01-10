import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursoModule } from './cursos/curso.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CriarCursoModule,
    CursoModule
  ],
  providers: [ LogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

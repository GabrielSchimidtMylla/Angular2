import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  filtro: string;

  livro: any = {
    titulo: "Learning JavaScript Data Structures and Algorithms - Second Edition",
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: "http://a.co.glqjpRP"
  };

  livros: string[] = [ "Angular 2", "C#" ];

  //Pipe Async
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Valor Assincrono"), 2000);
  });
  valorAsync2 = Observable.interval(2000)
                          .map(valor => "Valor Assincrono 2");

  constructor() { }

  ngOnInit() {
  }

  obterCursos()
  {
    if(this.livros.length === 0 || this.filtro === undefined 
      || this.filtro.trim() === "")
      return this.livros;

      return this.livros.filter(
        v => v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) != -1
      );
  }

  addCurso(value: string)
  {
    this.livros.push(value);
  }
}

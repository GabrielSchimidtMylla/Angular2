import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values: string[] = value.split(' ');
    let resultado: string = "";

    for(let v of values)
    {
      resultado += this.capitalize(v) + " ";
    }

    return resultado;
  }

  capitalize(valor: string)
  {
    return valor.substr(0,1).toUpperCase() + valor.substr(1).toLowerCase();
  }

}

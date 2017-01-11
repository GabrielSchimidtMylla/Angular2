import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable()
export class AuthService {

  usuarioAutenticado: boolean = false;

  mostrarMenu: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === "implantacao" && usuario.senha === "1234qwer")
    {
      this.usuarioAutenticado = true;
      this.mostrarMenu.emit(true);
      this.router.navigate(["/"]);
    }
     else
     {
        this.usuarioAutenticado = false;
        this.mostrarMenu.emit(false);
     }
  }

}

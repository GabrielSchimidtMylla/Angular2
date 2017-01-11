import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/rx';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  mostrarMenu: boolean = false;
  inscricao: Subscription;
  title = 'app works!';

  constructor(private authService: AuthService)
  {

  }

  ngOnInit()
  {
    this.inscricao = this.authService.mostrarMenu.subscribe((result) => this.mostrarMenu = result);
  }

  ngOnDestroy()
  {
    this.inscricao.unsubscribe();
  }
}

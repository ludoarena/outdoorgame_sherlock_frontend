import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  template: ` 
    <div>
      <h1>404 - Page not found</h1>
      <a routerLink="/users">Retourner à l'accueil</a> 
    </div>`,
  styles: ``,
})
export class PageNotFoundComponent {}

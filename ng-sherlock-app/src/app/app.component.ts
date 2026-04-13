import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Hello, {{ title() }}</h1>

    <router-outlet />
  `,
})
export class AppComponent implements OnInit {
  users = ['toto', 'titi', 'tata'];
  protected readonly title = signal(this.users[0]);

  ngOnInit(): void {
      console.table(this.users);
  }
}

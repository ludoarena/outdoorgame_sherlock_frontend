import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USERS } from './model/mock-users';
import { User } from './model/user';
import { BorderRowTable } from "./list-user/border-row-table.directive";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'app.component.html'
})
export class AppComponent {
}

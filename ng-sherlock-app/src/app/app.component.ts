import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USERS } from './mock-users';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  users : User[] = USERS;

  ngOnInit(): void {
      console.table(this.users);
  }

  selectUser(event : MouseEvent) {
    const index:number = +(event.target as HTMLInputElement).value;
    const fullName: string = `${this.users[index].firstName} ${this.users[index].lastName}`
    console.log(`You have clicked on ${fullName}`)
  }
}

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
      this.selectUser(this.users[0])
  }

  selectUser(user : User) {
    console.log(`You have clicked on ${user.firstName} ${user.lastName}`)
  }
}

import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { USERS } from './mock-users';
import { User } from './user';
import { BorderRowTable } from "./border-row-table.directive";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BorderRowTable, CommonModule],
  templateUrl: 'app.component.html',
  styleUrl : 'app.component.css'
})
export class AppComponent implements OnInit {
  users : User[] = USERS;
  selectedUser : User | undefined

  ngOnInit(): void {
      console.table(this.users);
  }

  selectUser(userId : string) {
    const user : User | undefined = this.users.find(user => user.id == +userId);
    this.selectedUser = user;

    if (user)
    {
        console.log(`You have clicked on ${this.buildFullName(user)}`);
    }
    else
    {
      console.log(`No user is selected`);
    }
  }

  buildFullName(user : User | undefined) : string
  {
    if (!user) return "undefined"

    return `${user.firstName} ${user.lastName}`;
  }
}

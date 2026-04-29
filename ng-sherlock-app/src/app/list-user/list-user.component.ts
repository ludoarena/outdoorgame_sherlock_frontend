import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { USERS } from '../model/mock-users';
import { User } from '../model//user';
import { BorderRowTable } from "./border-row-table.directive";

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, BorderRowTable],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
})
export class ListUserComponent implements OnInit {

  constructor(private router : Router) {}

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

  goToUserPage(user : User)
  {
    this.router.navigate(['/users', user.id]);
  }
}
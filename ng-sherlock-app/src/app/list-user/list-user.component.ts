import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../model//user';
import { BorderRowTable } from "./border-row-table.directive";
import { UserService } from '../user-service';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, BorderRowTable],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
})
export class ListUserComponent implements OnInit {

  users? : User[];
  selectedUser? : User;

  constructor(private router : Router, private userService : UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.table(this.users);
  }

  selectUser(userId : string) {
    const user : User | undefined = this.users?.find(user => user.id == +userId);
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
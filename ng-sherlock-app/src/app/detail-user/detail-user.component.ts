import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { USERS } from '../model/mock-users';
import { User } from '../model/user';

@Component({
  selector: 'app-detail-user',
  standalone: true,
  imports: [],
  templateUrl: './detail-user.component.html',
  styles: [],
})
export class DetailUserComponent implements OnInit {
  @Input() id!: string;

  users : User[] | undefined;
  user : User | undefined;

  ngOnInit(): void {
      this.users = USERS;
      if (this.id)
      {
        this.user = this.users.find(user => user.id === +this.id);
      }
  }
}

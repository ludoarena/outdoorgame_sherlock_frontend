import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from '../model/mock-users';
import { User } from '../model/user';

@Component({
  selector: 'app-detail-user',
  standalone: true,
  imports: [],
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.css',
})
export class DetailUserComponent implements OnInit {
  constructor(private router: Router) {}

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

  goBack(): void {
    this.router.navigate(['/users']);
  }
}

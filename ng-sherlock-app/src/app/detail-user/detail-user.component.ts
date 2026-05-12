import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../user-service';

@Component({
  selector: 'app-detail-user',
  standalone: true,
  imports: [],
  templateUrl: './detail-user.component.html',
  styleUrl: './detail-user.component.css',
})
export class DetailUserComponent implements OnInit {
  constructor(private router: Router, private userService : UserService) {}

  @Input() id!: string;

  user? : User;

  ngOnInit(): void {
      if (this.id)
      {
        this.user = this.userService.getUserById(+this.id);
      }
  }

  goToUsersPage(): void {
    this.router.navigate(['/users']);
  }

  goToEditPage(): void {
    this.router.navigate(['/users', this.id, 'edit']);
  } 
}

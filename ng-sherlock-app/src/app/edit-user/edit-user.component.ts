import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user-service';
import { ActivatedRoute } from '@angular/router';
import { UserFormComponent } from "../user-form/user-form.component";

@Component({
  selector: 'app-edit-user',
  imports: [UserFormComponent],
  template: `
    <h2>Editer {{ user?.firstName }} {{ user?.lastName }}</h2>
    @if (user)
      {<app-user-form [user]="user"></app-user-form>}
    `,
  styles: ``,
})
export class EditUserComponent implements OnInit {

  user : User | undefined;

  constructor(private route : ActivatedRoute, private userService : UserService) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');

    if (userId) {
      this.user = this.userService.getUserById(+userId);
    }
    else
    {
      this.user = undefined;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user-service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormComponent } from "../user-form/user-form.component";

@Component({
  selector: 'app-edit-user',
  imports: [UserFormComponent],
  template: `
    <h2>Editer {{ user?.firstName }} {{ user?.lastName }}</h2>
    @if (user) {
    <app-user-form
      [user]="user"
      (formSubmitted)="updateUserAndClose($event)">
    </app-user-form>
  }
    `,
  styles: ``,
})
export class EditUserComponent implements OnInit {

  user : User | undefined;

  constructor(private route : ActivatedRoute, private router : Router, private userService : UserService) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');

    if (userId) {
      this.userService.getUserById(+userId).subscribe(user => {
        this.user = user;
      });
    }
    else
    {
      this.user = undefined;
    }
  }

  updateUserAndClose(formValues: Partial<User>): void {

    const updatedUser = this.updateUser(formValues);

    if (updatedUser) {
      this.goToUserPage(updatedUser);
    }
  }

  updateUser(formValues: Partial<User>): User | undefined {

    if (!this.user) {
      return undefined;
    }

    const updatedUser: User = {
      ...this.user,
      ...formValues
    };

    this.userService.updateUser(updatedUser);

    console.log('The user has been modified', updatedUser);

    return updatedUser;
  }

  goToUserPage(user : User)
  {
    this.router.navigate(['/users', user.id]);
  }

}

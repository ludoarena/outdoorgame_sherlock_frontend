import { Injectable } from '@angular/core';
import {User} from './model/user';
import {USERS} from './model/mock-users';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  getUsers(): User[] {
    return USERS;
  }

  getUserById(userId : number) : User|undefined {
    return USERS.find(user => user.id == userId);
  }

  updateUser(updatedUser: User): void {

    const index = USERS.findIndex(
      user => user.id === updatedUser.id
    );

    if (index !== -1) {
      USERS[index] = updatedUser;
    }
}



}

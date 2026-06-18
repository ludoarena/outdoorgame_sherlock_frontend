import { inject, Injectable } from '@angular/core';
import { User } from './model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpClient = inject(HttpClient);

  // TODO : Hard coded in a first time. Temporary token
  private readonly TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTc4MTcyNjc5NywiZXhwIjoxNzgxODEzMTk3fQ.VL4_zl1jiI47kZKM_YiQcTOmZ5ockPJU7aIxPTdURV8';

  private get headers() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.TOKEN}`
    });
  }

  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<{ message: string; data: User[] }>('http://localhost:3000/api/users', { headers: this.headers })
      .pipe(map(response => response.data));
  }

  getUserById(userId: number): Observable<User> {
    return this.httpClient
      .get<{ message: string; data: User }>(`http://localhost:3000/user/api/${userId}`, { headers: this.headers })
      .pipe(map(response => response.data));
  }

  updateUser(updatedUser: User): Observable<User> {
    return this.httpClient
      .put<{ message: string; data: User }>(`http://localhost:3000/user/api/${updatedUser.id}`, updatedUser, { headers: this.headers })
      .pipe(map(response => response.data));
  }
}
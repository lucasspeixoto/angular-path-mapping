import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public getUserId(): string {
    const user = JSON.parse(localStorage.getItem('user')!);

    if (user) {
      return user.id;
    } else {
      return 'User';
    }
  }
}

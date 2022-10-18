import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public userId!: string;

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userId = this.userService.getUserId();
  }
}

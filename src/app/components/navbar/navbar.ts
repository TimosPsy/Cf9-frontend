import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { MatIconModule } from '@angular/material/icon'


@Component({
  selector: 'app-navbar',
  imports: [RouterLink,
    MatIconModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  userService = inject(UserService);
  user = this.userService.user;

  logout() {
    this.userService.logoutUser();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  toggleButtonClicked: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  click() {
    this.toggleButtonClicked = !this.toggleButtonClicked;
  }

  logout() {
    this.authService.logout();
  }
}

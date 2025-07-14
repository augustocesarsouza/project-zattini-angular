import { Component, OnInit } from '@angular/core';
import { UserLocalStorage } from '../../user-function/get-user-local-storage/user-local-storage';
import { Router } from '@angular/router';
import { TokenExpiration } from '../../user-function/token-validation/token-validation';
import { User } from '../../interface/user';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  user: User | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.verifyUser();
  }

  verifyUser(): void {
    if (typeof window === 'undefined' || !window.localStorage) return;

    const objUser = UserLocalStorage();

    if (objUser.isNullUserLocalStorage || objUser.user === null) {
      localStorage.removeItem('user');
      this.router.navigate(['/auth/login']);
      return;
    }

    const user = objUser.user;
    const token = user.token;

    if (token && TokenExpiration(token)) {
      localStorage.removeItem('user');
      this.router.navigate(['/auth/login']);
      return;
    }

    this.user = user;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-main',
  standalone: false,
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.css',
})
export class HeaderMainComponent {
  constructor(private router: Router) {}

  onclickBackToHomePage() {
    this.router.navigate(['/']);
  }
}

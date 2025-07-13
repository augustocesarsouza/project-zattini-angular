import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-full-main',
  standalone: false,
  templateUrl: './header-full-main.component.html',
  styleUrl: './header-full-main.component.css',
})
export class HeaderFullMainComponent {
  constructor(private router: Router) {}
}

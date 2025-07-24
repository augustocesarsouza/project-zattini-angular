import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  erroWhenCreateAccount = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['erroWhenCreateAccount'] === 'true') {
        this.erroWhenCreateAccount = true;
      }
    });
  }

  onClickContainerAlreadyClientAndCreateAccount() {
    this.erroWhenCreateAccount = false;
  }
}

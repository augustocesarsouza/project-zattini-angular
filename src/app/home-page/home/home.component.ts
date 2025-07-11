import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user-service/user.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const userId = 'e4ff899f-3504-4b20-be9f-31bf6ddb5223';
    this.userService.getByIdInfoUser(userId, '').subscribe({
      next: (success) => {
        console.log(success);
        console.log('oupnjiafi9ujads');
      },
      error: (error) => {
        if (error.status === 400) {
          console.log(error);

          // this.confirmEmail = false;
        }

        // if (error.status !== 400) {
        //   localStorage.removeItem('user');
        //   this.router.navigate(['/login'], { queryParams: { changePassword: false } });
        // }
      },
    });
  }
}

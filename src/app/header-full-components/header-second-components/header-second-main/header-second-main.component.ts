import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalStorage } from '../../../user-function/get-user-local-storage/user-local-storage';
import { User } from '../../../interface/user';
import { TokenExpiration } from '../../../user-function/token-validation/token-validation';

@Component({
  selector: 'app-header-second-main',
  standalone: false,
  templateUrl: './header-second-main.component.html',
  styleUrl: './header-second-main.component.css',
})
export class HeaderSecondMainComponent implements OnInit {
  @ViewChild('containerAllEnter') containerAllEnter!: ElementRef<HTMLDivElement>;
  @ViewChild('containerLoginMainModal') containerLoginMainModal!: ElementRef<HTMLDivElement>;
  @ViewChild('containerShoppingCardModal') containerShoppingCardModal!: ElementRef<HTMLDivElement>;

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

  onClickLoggingOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }

  onMouseEnterLogin() {
    const container = this.containerAllEnter.nativeElement;
    const containerLoginMainModal = this.containerLoginMainModal.nativeElement;
    container.classList.add('rotate-after');
    containerLoginMainModal.style.display = 'flex';
  }

  onMouseLeaveLogin() {
    const container = this.containerAllEnter.nativeElement;
    const containerLoginMainModal = this.containerLoginMainModal.nativeElement;
    container.classList.remove('rotate-after');
    containerLoginMainModal.style.display = 'none';
  }

  onMouseEnterContainerShoppingCardSvg() {
    const containerShoppingCardModal = this.containerShoppingCardModal.nativeElement;
    containerShoppingCardModal.style.display = 'flex';
  }

  onMouseLeaveContainerShoppingCardSvg() {
    const containerShoppingCardModal = this.containerShoppingCardModal.nativeElement;
    containerShoppingCardModal.style.display = 'none';
  }

  onClickLogin() {
    this.router.navigate(['/auth/login']);
  }
}

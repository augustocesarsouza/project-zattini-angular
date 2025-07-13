import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-second-main',
  standalone: false,
  templateUrl: './header-second-main.component.html',
  styleUrl: './header-second-main.component.css',
})
export class HeaderSecondMainComponent {
  @ViewChild('containerAllEnter') containerAllEnter!: ElementRef<HTMLDivElement>;
  @ViewChild('containerLoginMainModal') containerLoginMainModal!: ElementRef<HTMLDivElement>;
  @ViewChild('containerShoppingCardModal') containerShoppingCardModal!: ElementRef<HTMLDivElement>;

  constructor(private router: Router) {}

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

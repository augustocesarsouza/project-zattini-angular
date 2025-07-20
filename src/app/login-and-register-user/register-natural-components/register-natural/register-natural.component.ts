import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-natural',
  standalone: false,
  templateUrl: './register-natural.component.html',
  styleUrl: './register-natural.component.css',
})
export class RegisterNaturalComponent {
  constructor(private router: Router) {}

  onClickIndividual(containerIndividual: HTMLDivElement, containerLegalEntity: HTMLDivElement) {
    containerLegalEntity.style.zIndex = '0';
    containerLegalEntity.style.color = '#00c7c7';

    containerIndividual.style.zIndex = '10';
    containerIndividual.style.color = '#000';

    this.router.navigate(['/auth/register/natural']);
  }

  onClickLegalEntity(containerLegalEntity: HTMLDivElement, containerIndividual: HTMLDivElement) {
    containerIndividual.style.zIndex = '0';
    containerIndividual.style.color = '#00c7c7';

    containerLegalEntity.style.zIndex = '10';
    containerLegalEntity.style.color = '#000';

    this.router.navigate(['/auth/register/legal-entity']);
  }
}

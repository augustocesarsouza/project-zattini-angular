import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WidthCreateAccountIsLessThan1035Service } from '../../../service-dispatch/user-register/width-create-account-is-less-than-1035.service';

@Component({
  selector: 'app-register-natural',
  standalone: false,
  templateUrl: './register-natural.component.html',
  styleUrl: './register-natural.component.css',
})
export class RegisterNaturalComponent implements OnInit {
  @ViewChild('containerLegalEntity') containerLegalEntity!: ElementRef<HTMLDivElement>;
  @ViewChild('containerIndividual') containerIndividual!: ElementRef<HTMLDivElement>;

  constructor(
    private router: Router,
    private widthCreateAccountIsLessThan1035Service: WidthCreateAccountIsLessThan1035Service,
    private cdRef: ChangeDetectorRef
  ) {}

  canShowFormIndividualMediaSmaller = false;

  ngOnInit(): void {
    this.widthCreateAccountIsLessThan1035Service.value$.subscribe((value) => {
      this.canShowFormIndividualMediaSmaller = value;

      this.cdRef.detectChanges();
    });
  }

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

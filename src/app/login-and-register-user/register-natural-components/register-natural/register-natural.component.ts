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
  clickLegalEntity = false;

  constructor(
    private router: Router,
    private widthCreateAccountIsLessThan1035Service: WidthCreateAccountIsLessThan1035Service,
    private cdRef: ChangeDetectorRef
  ) {
    if (this.router.url.includes('/auth/register/natural')) {
      this.clickLegalEntity = false;
    } else {
      this.clickLegalEntity = true;
    }

    // tirar o cursor-pointer de quem for tiver clicado "clickLegalEntity"
  }

  canShowFormIndividualMediaSmaller = false;

  ngOnInit(): void {
    this.widthCreateAccountIsLessThan1035Service.value$.subscribe((value) => {
      this.canShowFormIndividualMediaSmaller = value;

      this.cdRef.detectChanges();
    });
  }

  onClickIndividual() {
    this.clickLegalEntity = false;
    this.router.navigate(['/auth/register/natural']);
  }

  onClickLegalEntity() {
    this.clickLegalEntity = true;
    this.router.navigate(['/auth/register/legal-entity']);
  }
}

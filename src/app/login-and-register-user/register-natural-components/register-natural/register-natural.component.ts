import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { WidthCreateAccountIsLessThan1035Service } from '../../../service-dispatch/user-register/width-create-account-is-less-than-1035.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-register-natural',
  standalone: false,
  templateUrl: './register-natural.component.html',
  styleUrl: './register-natural.component.css',
})
export class RegisterNaturalComponent implements OnInit, OnDestroy {
  @ViewChild('containerLegalEntity') containerLegalEntity!: ElementRef<HTMLDivElement>;
  @ViewChild('containerIndividual') containerIndividual!: ElementRef<HTMLDivElement>;
  clickLegalEntity = false;
  private destroy$ = new Subject<void>();

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
  errorLegalEntityFields = false;

  ngOnInit(): void {
    this.widthCreateAccountIsLessThan1035Service.value$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

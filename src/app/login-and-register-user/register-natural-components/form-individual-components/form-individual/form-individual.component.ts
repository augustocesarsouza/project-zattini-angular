import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { WidthCreateAccountIsLessThan1035Service } from '../../../../service-dispatch/user-register/width-create-account-is-less-than-1035.service';

@Component({
  selector: 'app-form-individual',
  standalone: false,
  templateUrl: './form-individual.component.html',
  styleUrl: './form-individual.component.css',
})
export class FormIndividualComponent implements OnInit {
  currentWidth: number = window.innerWidth;
  canShowFormIndividualMediaSmaller = false;

  constructor(
    private widthCreateAccountIsLessThan1035Service: WidthCreateAccountIsLessThan1035Service
  ) {}

  ngOnInit(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth < 1035) {
      this.widthCreateAccountIsLessThan1035Service.updateValue(true);
    } else {
      this.widthCreateAccountIsLessThan1035Service.updateValue(false);
    }

    this.updateWidth();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateWidth();
  }

  private updateWidth() {
    this.currentWidth = window.innerWidth;

    if (this.currentWidth < 1035) {
      this.canShowFormIndividualMediaSmaller = true;

      this.widthCreateAccountIsLessThan1035Service.updateValue(true);
    } else {
      this.canShowFormIndividualMediaSmaller = false;

      this.widthCreateAccountIsLessThan1035Service.updateValue(false);
    }
  }
}

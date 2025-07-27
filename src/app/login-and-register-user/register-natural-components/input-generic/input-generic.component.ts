import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-generic',
  standalone: false,
  templateUrl: './input-generic.component.html',
  styleUrl: './input-generic.component.css',
})
export class InputGenericComponent implements AfterViewInit, OnDestroy {
  @Input() handleFocus!: (inputName: HTMLInputElement, whichIs: string) => void;
  @Input() handleBlur!: (inputName: HTMLInputElement, whichIs: string) => void;
  @Input() handleInput!: (inputName: HTMLInputElement, whichIs: string) => void;

  @Input() whichIs!: string;

  @Input() getInput!: (input: HTMLInputElement) => void;

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  timeoutRef: any = null;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }

    this.timeoutRef = setTimeout(() => {
      if (this.getInput) {
        this.getInput(this.input.nativeElement);
      }
    }, 50);
  }

  ngOnDestroy(): void {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }
  }
}

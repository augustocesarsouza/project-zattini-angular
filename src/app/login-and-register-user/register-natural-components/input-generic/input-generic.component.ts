import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-generic',
  standalone: false,
  templateUrl: './input-generic.component.html',
  styleUrl: './input-generic.component.css',
})
export class InputGenericComponent {
  @Input() onInputFocus!: (
    inputName: HTMLInputElement,
    whichIs: 'name' | 'lastName' | 'cpf' | ''
  ) => void;
  @Input() onInputBlur!: (
    inputName: HTMLInputElement,
    whichIs: 'name' | 'lastName' | 'cpf' | ''
  ) => void;
  @Input() onInput!: (
    inputName: HTMLInputElement,
    whichIs: 'name' | 'lastName' | 'cpf' | ''
  ) => void;

  @Input() whichIs!: 'name' | 'lastName' | 'cpf' | '';

  constructor() {}
}

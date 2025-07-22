import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendClickedButtonContinueRegisterService {
  private valueButton = new BehaviorSubject<boolean>(false);

  valueButton$ = this.valueButton.asObservable();

  updatevalueButton(value: boolean) {
    this.valueButton.next(value);
  }

  get currentvalueButton(): boolean {
    return this.valueButton.getValue();
  }
}

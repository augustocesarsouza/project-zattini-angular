import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WidthCreateAccountIsLessThan1035Service {
  private value = new BehaviorSubject<boolean>(false);

  value$ = this.value.asObservable();

  updateValue(value: boolean) {
    this.value.next(value);
  }

  get currentValue(): boolean {
    return this.value.getValue();
  }
}

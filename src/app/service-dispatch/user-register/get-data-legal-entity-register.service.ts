import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LegalEntityCreateDTO } from '../../interface/dto/LegalEntityCreateDTO';

@Injectable({
  providedIn: 'root',
})
export class GetDataLegalEntityRegisterService {
  private valueGetData = new BehaviorSubject<LegalEntityCreateDTO | null>(null);

  valueGetData$ = this.valueGetData.asObservable();

  updateValueGetData(value: LegalEntityCreateDTO | null) {
    this.valueGetData.next(value);
  }

  get currentValueGetData(): LegalEntityCreateDTO | null {
    return this.valueGetData.getValue();
  }
}

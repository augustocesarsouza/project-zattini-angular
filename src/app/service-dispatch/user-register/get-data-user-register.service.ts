import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserCreateDTO } from '../../interface/dto/UserCreateDTO';

@Injectable({
  providedIn: 'root',
})
export class GetDataUserRegisterService {
  private valueGetData = new BehaviorSubject<UserCreateDTO | null>(null);

  valueGetData$ = this.valueGetData.asObservable();

  updateValueGetData(value: UserCreateDTO | null) {
    this.valueGetData.next(value);
  }

  get currentValueGetData(): UserCreateDTO | null {
    return this.valueGetData.getValue();
  }
}

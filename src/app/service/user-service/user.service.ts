import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserCreateDTO } from '../../interface/dto/UserCreateDTO';
import { User } from '../../interface/user';
import { CreateUserDTO } from '../../interface/dto/CreateUserDTO';

export interface ReturnGetUser {
  data: User;
  isSuccess: boolean;
}

export interface ResultReturnGeneric {
  data: ILoginData;
  isSuccess: boolean;
}

interface ILoginData {
  passwordIsCorrect: boolean;
  userDTO: User;
}

export interface ResultReturnCreate {
  data: CreateUserDTO;
  isSuccess: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.BASE_URL || '/api';

  constructor(private _http: HttpClient) {}

  getByIdInfoUser(userId: string, token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
      // uid: userId,
    });

    // return this._http
    //   .get<ReturnGetUser>(`${this.baseUrl}/user/get-by-id-info-user/${userId}`, { headers })
    //   .pipe(take(1));

    return this._http
      .get(`${this.baseUrl}/user/get-by-id-info-user/${userId}`, { headers })
      .pipe(take(1));
  }

  createAccount(userCreateDTO: UserCreateDTO) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${token}`,
      // uid: userId,
    });

    const options = {
      headers: headers,
    };

    return this._http
      .post<ResultReturnCreate>(`${this.baseUrl}/public/user/create`, userCreateDTO, options)
      .pipe(take(1));
  }
}

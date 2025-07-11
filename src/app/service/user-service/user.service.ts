import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';

// export interface ReturnGetUser {
//   data: User;
//   isSuccess: boolean;
// }

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
    console.log(this.baseUrl);

    return this._http
      .get(`${this.baseUrl}/user/get-by-id-info-user/${userId}`, { headers })
      .pipe(take(1));
  }
}

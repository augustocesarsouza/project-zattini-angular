import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment';
import { isPlatformServer } from '@angular/common';

// export interface ReturnGetUser {
//   data: User;
//   isSuccess: boolean;
// }

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private baseUrl = environment.BASE_URL || '/api';
  private baseUrl = '';

  constructor(
    private _http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformServer(this.platformId)) {
      this.baseUrl = process.env['BASE_URL'] || '';
    }
  }

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
}

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';
import { environment } from '../../../environments/environment';
import { isPlatformServer } from '@angular/common';
import { AppConfigService } from '../../core/app-config.service';

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
    private configService: AppConfigService
  ) {
    this.baseUrl = this.configService.baseUrl;
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

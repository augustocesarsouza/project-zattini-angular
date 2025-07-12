import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private _baseUrl: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformServer(this.platformId)) {
      // No SSR
      this._baseUrl = process.env['BASE_URL'] || '';
    } else {
      // No browser, opcional: usar variável global injetada via index.html ou fallback
      this._baseUrl = (window as any)['BASE_URL'] || '/api';
    }
  }

  get baseUrl(): string {
    return this._baseUrl;
  }
}

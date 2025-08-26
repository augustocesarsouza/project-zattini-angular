import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../../interface/user';
import { ProductDTO } from '../../interface/dto/ProductDTO';
import { ReturnErroCatch } from '../user-service/user.service';

export interface ReturnGetProduct {
  data: ProductDTO;
  isSucess: boolean;
}

export interface ReturnGetProductList {
  data: ProductDTO[];
  isSucess: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = environment.BASE_URL || '/api';

  constructor(private _http: HttpClient) {}

  getProductsByCategory(category: string, user: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
      uid: user.id,
    });

    return this._http.get<ReturnGetProductList | ReturnErroCatch>(
      `${this.baseUrl}/product/get-products-by-category/${category}`,
      {
        headers,
      }
    );
  }

  getProductsByCategoryToFilter(category: string, user: User) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.token}`,
      uid: user.id,
    });

    return this._http.get<ReturnGetProductList | ReturnErroCatch>(
      `${this.baseUrl}/product/get-products-by-category-to-filter/${category}`,
      {
        headers,
      }
    );
  }
}

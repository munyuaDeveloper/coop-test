import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, ProductResponseInterface } from '../model/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductResponseInterface> {
    return this.http.get<ProductResponseInterface>('https://dummyjson.com/products')
  }
}

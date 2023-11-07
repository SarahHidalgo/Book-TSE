import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  productsUrl = "assets/products.json";

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Products>(this.productsUrl);
  }
}

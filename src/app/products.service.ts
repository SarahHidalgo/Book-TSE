import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from "./interfaces/products";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  productsUrl : string = "assets/products.json";
  constructor(private http: HttpClient) { }

  getProducts = () => {
    return this.http.get<Array<Products>>(this.productsUrl);
  }
}

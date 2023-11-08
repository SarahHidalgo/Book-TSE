import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from "./interfaces/products";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  /*productsUrl : string = "assets/products.json";
  constructor(private http: HttpClient) { }

  getProducts = () => {
    return this.http.get<Array<Products>>(this.productsUrl);
  }*/
  apiUrl = 'assets/products.json';

  constructor(private http: HttpClient) { 
  }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl);
  }
  
}

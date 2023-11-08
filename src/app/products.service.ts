// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from "./interfaces/products";
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  apiUrl = 'assets/products.json';

  constructor(private http: HttpClient) {  }

  //Récupération de tous les produits de l'api
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl);
  }

  //Récupération d'un produit en fonction de l'id
  getProduct(id: number) {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }
  
}

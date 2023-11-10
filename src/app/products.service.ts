// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from "./interfaces/products";
import { Users } from './interfaces/users';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  apiUrl_products : string = 'assets/products.json';
  apiUrl_users :string = 'assets/users.json';

  constructor(private http: HttpClient) {  }

  //Récupération de tous les produits de l'api
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl_products);
  }

  // Récupération de tous les users de l'api
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl_users);
  }

  //Récupération d'un produit en fonction de l'id
  getProduct(id: number) {
    return this.getProducts().pipe(
      map(products => products.find(product => product.id === id))
    );
  }
  
}

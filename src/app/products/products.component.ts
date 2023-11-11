import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Products } from '../interfaces/products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  
  products_b: Observable<Products[]> | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.showProducts();
  }

  showProducts() {
    this.products_b = this.apiService.getProducts();
  }
}

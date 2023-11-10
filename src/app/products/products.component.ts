import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../interfaces/products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  
  products_b: Observable<Products[]> | undefined;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.showProducts();
  }

  showProducts() {
    this.products_b = this.productsService.getProducts();
  }
}

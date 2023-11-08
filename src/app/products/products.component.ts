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
  
  /*
  products: Array<Products> = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(data);
      
    });
  }*/
}

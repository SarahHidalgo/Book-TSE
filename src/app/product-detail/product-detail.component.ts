//product-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
  }

ngOnInit() {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      const id = parseInt(idString); // Convertir la chaîne en nombre
      this.productsService.getProduct(id).subscribe(product => {
        this.product = product;
      });
    } else {
      console.log("l'id est nul");
      // Gérer le cas où l'ID est null, par exemple rediriger ou afficher un message d'erreur.
    }
  }
 

}

//product-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit() {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      const id = parseInt(idString);
      this.apiService.getProduct(id).subscribe(product => {
        this.product = product;
      });
    } else {
      console.log("l'id est nul");
    }
  }
 
  buy_items() {
    // Affichage d'une alerte avec infos remplies
    alert(`Le produit à été ajouté au panier (imaginaire)`)
  }
}

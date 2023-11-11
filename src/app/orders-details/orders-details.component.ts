//orders-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css']
})
export class OrdersDetailsComponent implements OnInit{
  order: any;
  products: any;
  user: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit() {
    const idString = this.route.snapshot.paramMap.get('id_o');
    if (idString !== null) {
      const id = parseInt(idString);
      this.apiService.getOrder(id).subscribe(order => {
        this.order = order;

        // Récup des infos sur les produits avec les titres des produits dans la commande
        if (this.order && this.order.items) {
          this.apiService.getProducts().subscribe(products => {
            this.products = products.filter(product => this.order.items.includes(product.title));
          });
        }

        // Récup des infos de l'user en utilisant le user id de la commande
        if (this.order && this.order.id_u) {
          this.apiService.getUser(this.order.id_u).subscribe(user => {
            this.user = user;
          });
        }


      });
    } else {
      console.log("l'id est nul");
    }
  }
}

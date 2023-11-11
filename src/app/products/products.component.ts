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

  productsFantasy: Observable<Products[]> | undefined; // Liste pour les livres de Fantasy
  productsMythology: Observable<Products[]> | undefined; // Liste pour les livres de Mythologie Grecque
  productsFantastic: Observable<Products[]> | undefined; // Liste pour les livres Fantastique
  productsSciFi: Observable<Products[]> | undefined; // Liste pour les livres de Science Fiction
  productsRomance: Observable<Products[]> | undefined; // Liste pour les livres de Romance
  productsThriller: Observable<Products[]> | undefined; // Liste pour les livres Thriller
  productsMagic: Observable<Products[]> | undefined; // Liste pour les livres de Magie

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.showProducts();
  }

  buy_items() {
    // Affichage d'une alerte avec infos remplies
    alert(`Le produit à été ajouté au panier (imaginaire)`)
  }


  showProducts() {
    //this.products_b = this.apiService.getProducts();
    this.apiService.getProducts().subscribe(products => {

      // Filter products for the first container (Fantasy)
      this.productsFantasy = new Observable(observer => {
        const filteredFantasyProducts = products.filter(product => product.themes.includes("Fantasy"));
        observer.next(filteredFantasyProducts);
      });

      // Filter products for the second container (Mythologie grecque)
      this.productsMythology = new Observable(observer => {
        const filteredMythologyProducts = products.filter(product => product.themes.includes("Mythologie grecque"));
        observer.next(filteredMythologyProducts);
      });

      // Filter products for the third container (Fantastique)
      this.productsFantastic = new Observable(observer => {
        const filteredFantasticProducts = products.filter(product => product.themes.includes("Fantastique"));
        observer.next(filteredFantasticProducts);
      });

      // Filter products for the fourth container (SciFi)
      this.productsSciFi = new Observable(observer => {
        const filteredSciFiProducts = products.filter(product => product.themes.includes("Science-Fiction"));
        observer.next(filteredSciFiProducts);
      });

      // Filter products for the fifth container (Romance)
      this.productsRomance = new Observable(observer => {
        const filteredRomanceProducts = products.filter(product => product.themes.includes("Romance"));
        observer.next(filteredRomanceProducts);
      });

      // Filter products for the sixth container (Thriller)
      this.productsThriller = new Observable(observer => {
        const filteredThrillerProducts = products.filter(product => product.themes.includes("Thriller"));
        observer.next(filteredThrillerProducts);
      });

      // Filter products for the sixth container (Thriller)
      this.productsMagic = new Observable(observer => {
        const filteredMagicProducts = products.filter(product => product.themes.includes("Magie"));
        observer.next(filteredMagicProducts);
      });

    });
  }
}

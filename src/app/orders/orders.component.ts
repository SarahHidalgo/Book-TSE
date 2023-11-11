import { Component } from '@angular/core';
import { Orders } from '../interfaces/orders';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders: Observable<Orders[]> | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.showOrders();
  }

  showOrders() {
    this.orders = this.apiService.getOrders();
  }
}

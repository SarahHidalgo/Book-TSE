import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: Observable<Users[]> | undefined;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.showUsers();
  }

  showUsers() {
    this.users = this.productsService.getUsers();
  }
}

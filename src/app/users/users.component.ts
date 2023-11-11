import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: Observable<Users[]> | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.showUsers();
  }

  showUsers() {
    this.users = this.apiService.getUsers();
  }
}

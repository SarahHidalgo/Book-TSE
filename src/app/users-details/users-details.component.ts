import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {
  user: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  ngOnInit() {
    const id_uString = this.route.snapshot.paramMap.get('id_u');
    if (id_uString !== null) {
      const id_u = parseInt(id_uString);
      this.apiService.getUser(id_u).subscribe(user => {
        this.user = user;
      });
    } else {
      console.log("l'id du user est nul");
    }
  }
}

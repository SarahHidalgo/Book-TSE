import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component'
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'contact_form', component: ContactFormComponent},
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:id_o', component: OrdersDetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id_u', component: UsersDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

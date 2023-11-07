import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact_form', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

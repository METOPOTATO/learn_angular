import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FirstComponent } from './first/first.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'products', component: FirstComponent},
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  { path: 'products/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

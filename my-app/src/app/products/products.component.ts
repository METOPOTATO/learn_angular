import { Component } from '@angular/core';
import { PRODUCTS } from '../mockdata';
import { Product } from '../product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = PRODUCTS;  

  selectedProduct?: Product;
  show(product: Product){
    this.selectedProduct = product;
  }
}

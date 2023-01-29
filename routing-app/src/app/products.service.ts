import { Injectable } from '@angular/core';
import { PRODUCTS } from './product-mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(){
    const products = of(PRODUCTS);
    return products;
  }

  getProduct(id: number){
    const product = PRODUCTS.find(p => p.id === id);
    return of(product);
  }
}

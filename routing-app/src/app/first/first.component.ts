import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  products: Product[] = []
  selectedProduct: Product | undefined;
  constructor(private productService: ProductsService){

  }

  ngOnInit(){
    this.productService.getProducts().subscribe(products => this.products = products)
  }

  show(product: Product){
    this.selectedProduct = product;
  }
}

import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent {
  // product: Product | undefined;

  @Input() product?: Product | undefined;

  constructor(private productService: ProductsService, private route: ActivatedRoute){}

  ngOnInit(){
    this.getProduct()
  }

  getProduct(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(product => this.product=product);
  }

}

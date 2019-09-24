import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { storeProducts } from '../data.js';
import M from 'materialize-css/dist/js/materialize.min.js';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  storeProducts;
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {    
    this.route.paramMap.subscribe(params => {
      this.product = storeProducts[+params.get('productId')];
    })
    
  }

  addToCart(product) {
    M.toast({html: 'Product added to cart!'});
    this.cartService.addToCart(product);
  }

}

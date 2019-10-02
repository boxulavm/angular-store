import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  loading = true;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.shippingCosts = this.cartService.getShippingPrices();
      this.loading = false;
    }, 700);
  }

}

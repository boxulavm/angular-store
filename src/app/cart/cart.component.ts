import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../cart.service'
import { NgForm } from '@angular/forms'
import M from 'materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  totalPrice;

  @ViewChild('checkoutForm', { static: false } ) form2: NgForm;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.totalPrice = this.items
      .map(item => Number(item.price))
      .reduce((total, price) => total + price, 0) ;
  }

  onSubmit(){
    // Process ckeckout data here
    M.toast({html: `Your order has been submitted, ${this.form2.value.name} - ${this.form2.value.address}`});
  
    this.items = this.cartService.clearCart();
    this.form2.reset();
  }

}

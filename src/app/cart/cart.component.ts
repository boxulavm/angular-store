import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { FormBuilder } from '@angular/forms'
import M from 'materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  onSubmit(customerData){
    // Process ckeckout data here
    M.toast({html: `Your order has been submitted, ${customerData.name} - ${customerData.address}`});
  
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}

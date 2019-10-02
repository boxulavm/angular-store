import { Component, OnInit } from '@angular/core';
import { storeProducts } from '../data.js'
import M from 'materialize-css/dist/js/materialize.min.js'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  storeProducts = storeProducts;

  constructor() { }

  ngOnInit() {
  }


  onNotify(){
    M.toast({html: 'You will be notified when product goes on sale!'});
  }
}

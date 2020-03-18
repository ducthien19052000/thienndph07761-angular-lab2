import { Component, OnInit } from '@angular/core';
import {data} from '../MockData';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 products = data
DMdelete(e){
  
   return this.products = this.products.filter(product => product.id != e);
}
  
 
}
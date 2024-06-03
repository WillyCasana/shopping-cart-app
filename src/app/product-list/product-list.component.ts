import { Component } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products:Product[]=[
    {id:1,name:'Product 1',price:10,cod:'prod01',quantity:1},
    {id:2,name:'Product 2', price:20,cod:'prod02',quantity:1},
    {id:3,name:'Product 3',price:30,cod:'prod03',quantity:1}
  ];

  constructor(private cartService:CartService){}

  addToCart(product:Product){
    this.cartService.addToCart(product);
  }

};

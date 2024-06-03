import { Component } from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems:Product[]=[];

  constructor(private cartService:CartService ){}

  ngOnInit(){
    this.cartItems=this.cartService.getCartItems();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
  }
}

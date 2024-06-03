import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:Product[]=[];
 //Method for inserting or updating
  addToCart(product:Product){
    let foundPro=this.cartItems.find(x=>x.cod==product.cod);
    let foundProIndex=this.cartItems.findIndex(x=>x.cod==product.cod);
    if (foundPro===undefined)
      {
        this.cartItems.push(product);
      }
    else{
      let quantity= foundPro?.quantity??0;
      quantity+=1;
      this.cartItems[foundProIndex].quantity=quantity;

    }
    
  }
  removeFromCart(product:Product){
    const index = this.cartItems.indexOf(product);
    if (index!==-1){
      this.cartItems.splice(index,1);
    }
  }

  getCartItems():Product[]{
    return this.cartItems;
  }
}

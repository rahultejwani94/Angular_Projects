import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem, Product } from '../models/custom-types';
import { CommonModule } from '@angular/common';
import { SharedService } from '../services/shared.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.scss'
})
export class ProductDisplayComponent {

  cartItems: CartItem[] = [];
  productList!: Product[];

  constructor(private sharedService: SharedService){

  }

  ngOnInit(){
    this.sharedService.productList$.subscribe((productList) => {
      this.productList = productList;
      console.log("productlist in display: ", this.productList)
    });
    this.sharedService.cartItems$.subscribe((cartItems) => this.cartItems = cartItems);
    
  }

  trackByFunction(index: number,product: Product){
    return product.id;
  }

  // deleteProduct(index: number){
  //   this.deleteProductEvent.emit(index);
  // }

  addProductToCart(index: number, product: Product){
    // createCartItem(product)
    let productFound = false;
    if(this.cartItems.length != 0){
      for(let i = 0; i < this.cartItems.length; i++){
        if(product.id == this.cartItems[i].id){
          this.cartItems[i].quantity += 1;
          this.cartItems[i].total_price += product.price;
          productFound = true;
          break;
        }
      }
    }
    if(!productFound || this.cartItems.length == 0){
      let cartItem: CartItem = {
        id: product.id,
        name: product.name,
        desc: product.desc,
        quantity: 1,
        total_price: product.price 
      }
      this.cartItems.push(cartItem);
    }

    // call sharedservice to update the cartitems in the behaviour subject
    this.sharedService.updateCartItem(this.cartItems);
  }


  ngOnChanges(){
    console.log("ngOnChanges called ")
  }

//   ngDoCheck(){
//     console.log("ng docheck called")
//   }
}

import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { CartItem, Product } from '../models/custom-types';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.scss'
})
export class ViewCartComponent {

  cartItems!: CartItem[];
  productList!: Product[];

  isCheckOutDone: boolean= false;
  constructor(private sharedService: SharedService, private router: Router){

  }

  ngOnInit(){
    this.sharedService.cartItems$.subscribe((cartItems) => this.cartItems = cartItems);
    this.sharedService.productList$.subscribe((productList) => this.productList = productList);
  }

  trackByFunction(index: number, item: CartItem){
    return item.id;
  }

  increment(id: number){
    this.cartItems.forEach((item) => {
      let product = this.productList.find((product) => product.id == item.id);
      if(item.id == id) {
        if(item.quantity < product!.initial_quantity){
        item.quantity += 1;
        item.total_price += product!.price;
      }
      else{
        alert("more items cannot be added as items are no more present in the stock")
      }
    }
    })
  }

  decrement(id: number){
    this.cartItems.forEach((item, index) => {
      let product = this.productList.find((product) => product.id == item.id);
      if(item.id == id && item.quantity > 0){
        if(item.quantity == 1){
          this.cartItems.splice(index,1);
        }
        else{
          item.quantity -= 1;
          item.total_price -= product!.price
        }
        }
      }
    )
  }

  checkOut(){
    this.cartItems.forEach((item)=>
    {
      let product = this.productList.find((product) => product.id == item.id);
      product!.initial_quantity -= item.quantity;
    } )
    this.sharedService.updateProductList(this.productList);
    this.sharedService.updateCartItem([]);
    this.isCheckOutDone= true;
    setTimeout(() => {
      this.router.navigate(['/product-list']);
    }, 3000);
  }
}

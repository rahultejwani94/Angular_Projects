import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from '../models/custom-types';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private cartItems: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  private productList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  productList$ = this.productList.asObservable();

  constructor() { }

  updateCartItem(cartList: CartItem[]){
    this.cartItems.next(cartList);
  }

  updateProductList(productList: Product[]){
    this.productList.next(productList);
  }

}

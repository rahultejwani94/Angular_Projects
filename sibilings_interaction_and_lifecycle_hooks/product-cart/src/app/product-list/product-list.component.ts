import { Component } from '@angular/core';
import { Product } from '../models/custom-types';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ReactiveFormsModule, ProductDisplayComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  productId: number;
  productList: Product[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) {
    this.productId = 0;
  }
  ngOnInit() {
    console.log('prodyuct list ngoninit');

    this.sharedService.productList$.subscribe((productList) => {
      this.productList = productList;
    })

    if (this.productList.length == 0) {
      this.productList.push({
        id: this.productId,
        name: 'Iphone',
        price: 50,
        initial_quantity: 50,
      });
      this.sharedService.updateProductList(this.productList);
    }
  }

  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    desc: [''],
    price: ['', Validators.required],
    initial_quantity: ['', Validators.required],
  });

  addProduct(product: Product) {
    this.productList.push(product);
  }

  // deleteProduct(index: number){
  //   console.log(index);
  //  this.productList.splice(index,1);
  //   console.log(this.productList);
  //   if(this.productList.length == 0){
  //     this.productId = 0;
  //   }
  // }
  // updateProductDetails(object: any){
  //   this.productList[object.index].initial_quantity = object.quantity;
  // }

  onSubmit() {
    if (this.productForm.valid) {
      this.productId++;
      let formValues = this.productForm.value;
      console.log(typeof formValues);
      console.log(typeof formValues.name);
      let product: Product = {
        id: this.productId,
        name: String(formValues.name),
        desc: String(formValues.desc),
        price: Number(formValues.price),
        initial_quantity: Number(formValues.initial_quantity),
      };
      this.addProduct(product);
      this.sharedService.updateProductList(this.productList);
      console.log(this.productList);
    }
  }
}

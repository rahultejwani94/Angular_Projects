import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

export const routes: Routes = [
    {
        path:'', redirectTo:'/product-list', pathMatch: 'full'
    },
    {
        path:'product-list', component: ProductListComponent
    },
    {
        path: 'product-display', component: ProductDisplayComponent
    },
    {
        path: 'view-cart', component: ViewCartComponent
    }
];

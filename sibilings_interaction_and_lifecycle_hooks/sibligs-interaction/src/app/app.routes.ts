import { Routes } from '@angular/router';
import { Sibling2Component } from './sibling-2/sibling-2.component';
import { Sibling1Component } from './sibling-1/sibling-1.component';

export const routes: Routes = [
    {
        path: 'sibling-2', component: Sibling2Component
    },
    {
        path:'', redirectTo: '/sibling-1', pathMatch:'full'
    },
    {
        path: 'sibling-1', component: Sibling1Component
    }
];

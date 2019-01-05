import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    children: [      
      {
        path: 'sale',
        loadChildren: './sale/sale.module#saleModule'
      },
      {
        path: 'inventory',
        loadChildren: './inventory/inventory.module#inventoryModule'
      },
      {
        path: 'manager',
        loadChildren: './manager/manager.module#managerModule'
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }

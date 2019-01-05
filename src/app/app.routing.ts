import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SchedulerComponent } from './scheduler/scheduler.component'
import { AuthGuard } from '../common-session/session.check';
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
      },
      {
        path: 'scheduler',
        component: SchedulerComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

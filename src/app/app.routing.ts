import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
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
        path: 'reports',
        loadChildren: './reports/reports.module#reportsModule'
      },
      {
        path: 'setup',
        loadChildren: './setup/setup.module#setupModule'
      },
      {
        path: 'time-clock',
        loadChildren: './time-clocks/time-clocks.module#EmpTimeClocksModule'
      },

      {
        path: 'scheduler',
        component: SchedulerComponent,
        canActivate: [AuthGuard]
      }
      // {
      //   path: 'time-clock',
      //   component: TimeClockComponent,
      //   canActivate: [AuthGuard]
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

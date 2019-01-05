import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../common-session/session.check';
import { ManagerSidebarComponent } from './manager-sidebar/manager-sidebar.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        redirectTo: 'side-bar'
      },
      {
        path: 'side-bar',
        component: ManagerSidebarComponent,
        canActivate: [AuthGuard]
      }
      // {
      //   path: 'purchase',
      //   component: PurchaseOrderComponent,
      //   canActivate: [AuthGuard]
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class managerRoutingModule {}

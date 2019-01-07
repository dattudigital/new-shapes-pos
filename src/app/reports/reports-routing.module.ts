import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../common-session/session.check';
import { ReportsSidebarComponent } from './reports-sidebar/reports-sidebar.component';

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
          component: ReportsSidebarComponent,
          canActivate: [AuthGuard]
        },
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class reportsRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../common-session/session.check';
import { SchedulerComponent } from './scheduler.component';

// const routes: Routes = [{
//     path: '',
//     redirectTo: ''
// },
// {
//     path: '',
//     component: SchedulerComponent,
//     canActivate: [AuthGuard]
// }
// ]

const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Buttons'
      },
      children: [
        {
          path: '',
          redirectTo: ''
        },
        {
          path: '',
          component: SchedulerComponent,
          canActivate: [AuthGuard]
        }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class schedulerRoutingModule { }
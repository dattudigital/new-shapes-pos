import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../common-session/session.check';
import{ApptSchedulerComponent} from './appt-scheduler/appt-scheduler.component'


const routes: Routes = [
    {
      path: '',
      data: {
        title: 'Buttons'
      },
      children: [
        {
          path: '',
          redirectTo: 'appt'
        },
        {
          path: 'appt',
          component: ApptSchedulerComponent,
          canActivate: [AuthGuard]
        },
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ApptSchedulerRoutingModule { }
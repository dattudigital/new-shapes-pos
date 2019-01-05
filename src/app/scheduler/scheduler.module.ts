import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../common-session/session.check';
import {SchedulerComponent} from './scheduler.component';
import {schedulerRoutingModule} from './scheduler-routing.module'
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      schedulerRoutingModule
    ],
    declarations: [
        SchedulerComponent
    ],
    providers: [AuthGuard]
  })
  
  export class schedulerModule { }
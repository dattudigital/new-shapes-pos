import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../common-session/session.check';
import { ApptSchedulerComponent } from './appt-scheduler/appt-scheduler.component'
import { ApptSchedulerRoutingModule } from './scheduler-routing.module';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ApptSchedulerRoutingModule,
        CalendarModule,
        TableModule
    ],
    declarations: [ApptSchedulerComponent
    ],
    providers: [AuthGuard]
})
export class ApptSchedulerModule { }


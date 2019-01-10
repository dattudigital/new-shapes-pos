import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../common-session/session.check';
import {reportsRoutingModule} from './reports-routing.module';
import { ReportsSidebarComponent } from './reports-sidebar/reports-sidebar.component';
import { SaleComponent } from './sale/sale.component';
import { DatesFilterComponent } from './dates-filter/dates-filter.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        reportsRoutingModule,
        CalendarModule
    ],
    declarations: [
        ReportsSidebarComponent,
        SaleComponent,
        DatesFilterComponent
    ],
    providers: [AuthGuard]
})
export class reportsModule { }


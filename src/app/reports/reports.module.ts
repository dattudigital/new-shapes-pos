import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../common-session/session.check';
import {reportsRoutingModule} from './reports-routing.module';
import { ReportsSidebarComponent } from './reports-sidebar/reports-sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        reportsRoutingModule
    ],
    declarations: [
        ReportsSidebarComponent
    ],
    providers: [AuthGuard]
})
export class reportsModule { }


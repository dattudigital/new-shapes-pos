import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { saleRoutingModule } from './sale-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../common-session/session.check';
import { DashboardComponent } from './sale-dashboard/dashboard.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component'

@NgModule({
  imports: [
    CommonModule,
    saleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    NewTicketComponent
  ],
  providers: [AuthGuard]
})

export class saleModule { }
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { saleRoutingModule } from './sale-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AuthGuard } from '../../common-session/session.check';
import { DashboardComponent } from './sale-dashboard/dashboard.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { NewTicketNextButtonComponent } from './new-ticket-next-button/new-ticket-next-button.component';
import { NewTicketNextButtonInvoiceComponent } from './new-ticket-next-button-invoice/new-ticket-next-button-invoice.component';
import { NewTicketInvoicePaymentComponent } from './new-ticket-invoice-payment/new-ticket-invoice-payment.component'
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    saleRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [
    DashboardComponent,
    NewTicketComponent,
    NewTicketNextButtonComponent,
    NewTicketNextButtonInvoiceComponent,
    NewTicketInvoicePaymentComponent
  ],
  providers: [AuthGuard]
})

export class saleModule { }
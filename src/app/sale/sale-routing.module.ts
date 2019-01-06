import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../common-session/session.check'
import { DashboardComponent } from './sale-dashboard/dashboard.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { NewTicketNextButtonComponent } from './new-ticket-next-button/new-ticket-next-button.component';
import { NewTicketNextButtonInvoiceComponent } from './new-ticket-next-button-invoice/new-ticket-next-button-invoice.component';
import { NewTicketInvoicePaymentComponent } from './new-ticket-invoice-payment/new-ticket-invoice-payment.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'new-ticket',
        component: NewTicketComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'new-ticket-next-button',
        component: NewTicketNextButtonComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'new-ticket-next-button-invoice',
        component: NewTicketNextButtonInvoiceComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'new-ticket-next-button-invoice-payment',
        component:NewTicketInvoicePaymentComponent,
        canActivate:[AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class saleRoutingModule {}

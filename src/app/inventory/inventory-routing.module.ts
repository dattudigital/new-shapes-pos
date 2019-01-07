import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../common-session/session.check';
import { InvSidebarComponent } from './inv-sidebar/inv-sidebar.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { NewPurchaseOrderComponent } from './new-purchase-order/new-purchase-order.component';
import { PurchaseOrderSupplierComponent } from './purchase-order-supplier/purchase-order-supplier.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { InventoryTicketsComponent } from './inventory-tickets/inventory-tickets.component';
import { UpdatePhysicalInventoryComponent } from './update-physical-inventory/update-physical-inventory.component';
import { InventoryReportsComponent } from './inventory-reports/inventory-reports.component';
import { AddNewSuppliersComponent } from './suppliers/add-new-suppliers/add-new-suppliers.component';
import { NewInventoryTicketComponent } from './inventory-tickets/new-inventory-ticket/new-inventory-ticket.component';

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
        component: InvSidebarComponent,
        canActivate: [AuthGuard]
      },
      { path: 'suppliers', component: SuppliersComponent, canActivate: [AuthGuard] },
      { path: 'purchase-order', component: PurchaseOrderComponent, canActivate: [AuthGuard] },
      { path: 'new-purchase-order', component: NewPurchaseOrderComponent, canActivate: [AuthGuard] },
      { path: 'inventory-tickets', component: InventoryTicketsComponent, canActivate: [AuthGuard] },
      { path: 'physical-inventory', component: UpdatePhysicalInventoryComponent, canActivate: [AuthGuard] },
      { path: 'reports', component: InventoryReportsComponent, canActivate: [AuthGuard] },
      { path: 'suppliers/new-suppliers', component: AddNewSuppliersComponent, canActivate: [AuthGuard] },
      { path: 'new-inventory-ticket', component: NewInventoryTicketComponent, canActivate: [AuthGuard] },
      { path: 'purchase-order-supplier', component: PurchaseOrderSupplierComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class inventoryRoutingModule {}

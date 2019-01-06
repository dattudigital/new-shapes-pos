import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { inventoryRoutingModule } from './inventory-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../common-session/session.check';
import { InvSidebarComponent } from './inv-sidebar/inv-sidebar.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseOrderSupplierComponent } from './purchase-order-supplier/purchase-order-supplier.component'
import { NewPurchaseOrderComponent } from './new-purchase-order/new-purchase-order.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { InventoryTicketsComponent } from './inventory-tickets/inventory-tickets.component';
import { UpdatePhysicalInventoryComponent } from './update-physical-inventory/update-physical-inventory.component';
import { InventoryReportsComponent } from './inventory-reports/inventory-reports.component';
import { AddNewSuppliersComponent } from './suppliers/add-new-suppliers/add-new-suppliers.component';
import { NewInventoryTicketComponent } from './inventory-tickets/new-inventory-ticket/new-inventory-ticket.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  imports: [
    CommonModule,
    inventoryRoutingModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule
  ],
  declarations: [
    InvSidebarComponent,
    PurchaseOrderComponent,
    NewPurchaseOrderComponent,
    PurchaseOrderSupplierComponent,
    SuppliersComponent,
    InventoryTicketsComponent,
    UpdatePhysicalInventoryComponent,
    InventoryReportsComponent,
    AddNewSuppliersComponent,
    NewInventoryTicketComponent
  ],
  providers: [AuthGuard]
})

export class inventoryModule { }

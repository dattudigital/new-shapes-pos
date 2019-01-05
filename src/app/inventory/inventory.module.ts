import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { inventoryRoutingModule } from './inventory-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../../common-session/session.check';
import { InvSidebarComponent } from './inv-sidebar/inv-sidebar.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';

@NgModule({
  imports: [
    CommonModule,
    inventoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    InvSidebarComponent,
    PurchaseOrderComponent
  ],
  providers: [AuthGuard]
})

export class inventoryModule { }

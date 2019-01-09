import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'fmyp-reports-sidebar',
  templateUrl: './reports-sidebar.component.html',
  styleUrls: ['./reports-sidebar.component.css']
})
export class ReportsSidebarComponent implements OnInit {
  staffContent = false;
  salesContent = false;
  clientsContent = false;
  paymentContent = false;
  inventoryContent = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showStaffContent() {
    this.staffContent = true;
    this.salesContent = false;
    this.clientsContent = false;
    this.paymentContent = false;
    this.inventoryContent = false;
  }
  showSalesContent() {
    this.salesContent = true;
    this.staffContent = false;
    this.clientsContent = false;
    this.paymentContent = false;
    this.inventoryContent = false;
  }

  showClientsContent() {
    this.clientsContent = true;
    this.staffContent = false;
    this.salesContent = false;
    this.paymentContent = false;
    this.inventoryContent = false;
  }

  showPaymentContent() {
    this.paymentContent = true;
    this.clientsContent = false;
    this.staffContent = false;
    this.salesContent = false;
    this.inventoryContent = false;
  }

  showInventoryContent() {
    this.inventoryContent = true;
    this.paymentContent = false;
    this.clientsContent = false;
    this.staffContent = false;
    this.salesContent = false;
  }

}

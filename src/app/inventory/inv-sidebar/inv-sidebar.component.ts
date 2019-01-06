import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fmyp-inv-sidebar',
  templateUrl: './inv-sidebar.component.html',
  styleUrls: ['./inv-sidebar.component.css']
})

export class InvSidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToPurchaseOrder() {
    this.router.navigate(['inventory/purchase-order'])
  }

  redirectToSupplier() {
    this.router.navigate(['inventory/suppliers'])
  }

  redirectToInventory() {
    this.router.navigate(['inventory/inventory-tickets']);
  }

  redirectToUpdate() {
    this.router.navigate(['inventory/physical-inventory']);
  }

  redirectToReportsInventory() {
    this.router.navigate(['inventory/reports']);
  }
  
}

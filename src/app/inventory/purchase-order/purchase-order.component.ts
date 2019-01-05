import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fmyp-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToDashboard() {
    this.router.navigate(['sale/dashboard'])
  }

}

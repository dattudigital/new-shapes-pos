import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SheduleServiceService } from '../../../services/shedule-service.service';
import { InventoryServiceService } from '../../../services/inventory-service.service';
@Component({
  selector: 'app-new-inventory-ticket',
  templateUrl: './new-inventory-ticket.component.html',
  styleUrls: ['./new-inventory-ticket.component.css']
})
export class NewInventoryTicketComponent implements OnInit {
  inventoryTranfer = false;
  inventoryIncoming = false;
  locationData = new Array();
  productData = new Array();
  selectedProductData = new Array()
  supplierData = new Array()
  location: any = {
    'startdate': '',
    'enddate': '',
    'branch_id': '',
    'employee_id': '',
    'employee_firstname': ''
  }
  product: any = {
    'product_id': '',
    'product_name': '',
    'product_price': ''
  }
  supplier: any = {
    'supplier_id': ''
  }
  productName: '';
  productPrice: '';

  inventory: any = {
    'source': '',
    'destination': '',
    'productId': '',
    'itemQuty': '',
    'poStatus': ''
  }
  amount: number;
  constructor(private router: Router,private _location: Location, private locationService: SheduleServiceService, private inventoryService: InventoryServiceService) { }

  ngOnInit() {
    this.locationService.getAllLocations().subscribe(response => {
      this.locationData = response.json().result;
    });
    this.inventoryService.getproduct().subscribe(res => {
      this.productData =res.json().result;
    });
    this.inventoryService.getSuppliers().subscribe(res => {
      this.supplierData =res.json().result;
    })
  }
  backToInventory() {
    this._location.back();
  }
  Transfer() {
    this.inventoryTranfer = true;
    this.inventoryIncoming = false;
  }
  Incoming() {
    this.inventoryTranfer = false;
    this.inventoryIncoming = true;
  }

  setBranch(branch_id: any): void {
    this.location.branch_id = branch_id;
  }

  selectProduct(product_id: any) {
    this.product.product_id = product_id;
    console.log(this.product.product_id);
    this.inventoryService.getSelectedProduct(this.product.product_id).subscribe(data => {
      this.selectedProductData = data.json();
      this.productName = this.selectedProductData[0].product_name;
      this.productPrice = this.selectedProductData[0].product_price;
      console.log(this.productName);
      console.log(this.productPrice);
    })
  }
  submitInventoryTicket() {
    var data: any = {
      source: this.inventory.source,
      destination: this.inventory.destination,
      product_id: this.inventory.productId,
      item_qty: this.inventory.itemQuty,
      amt: this.amount,
      pos_status: this.inventory.poStatus,
      status: 1,
      emp_id:7
    }
    if (data.source == '') {
      data.source = null;
    }
    if (data.destination == '') {
      data.destination = null;
    }
    console.log(data);
    this.inventoryService.saveInventoryTicket(data).subscribe(res => {
      console.log(res.json().result);
    })
  }
  dispalyAmount(val) {
    this.amount = parseInt(this.productPrice) * parseInt(val)
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment/moment';
import { Location } from '@angular/common';
import { InventoryServiceService } from '../../services/inventory-service.service';
@Component({
  selector: 'app-purchase-order-supplier',
  templateUrl: './purchase-order-supplier.component.html',
  styleUrls: ['./purchase-order-supplier.component.css']
})
export class PurchaseOrderSupplierComponent implements OnInit {
  public date1: any;
  retrievedObject: any;
  productData = new Array();
  supplierName = '';
  supplierId = '';
  paymentTerms = '';
  supplierAddress = '';

  deliveryDate = '';
  showItem = '';
  poNotes = '';
  autoGeneratePo:any;

  product:any={
    'product_id':'',

  }
  constructor(private router: Router,private _location: Location, private service: InventoryServiceService) { }

  ngOnInit() {
    this.retrieveData();
    this.service.getproduct().subscribe(res => {
      this.productData = res["result"];
    });

  }
  backToInventory() {
    this._location.back();
  }
  redirectToEditSupplier(){
    this.router.navigate(['suppliers']);
  }
  retrieveData() {
    this.retrievedObject = JSON.parse(localStorage.getItem('supplierdata'));
    console.log(this.retrievedObject);
    console.log(this.retrievedObject.result[0].supplier_name);
    this.supplierId = this.retrievedObject.result[0].supplier_id;
    this.supplierName = this.retrievedObject.result[0].supplier_name;
    this.paymentTerms = this.retrievedObject.result[0].supplier_paymentterms;
    this.supplierAddress = this.retrievedObject.result[0].supplier_address;

  }
  poDeliveryDate() {
    let newDate = moment(this.date1).format('YYYY-MM-DD').toString();
    this.deliveryDate = newDate;
    console.log(this.deliveryDate);
  }
  savePurchaseOrder() {
    this.autoGeneratePo=Math.floor(Math.random() * 899999 + 100000);
    console.log(this.autoGeneratePo);
    var data: any = {
      supplier_id: this.supplierId,
      po_date: this.deliveryDate,
      po_items: this.showItem,
      po_remarks: this.poNotes,
      po_invoice_no:this.autoGeneratePo,
      status: 1
    }
    console.log(data);
    this.service.postPurchaseOrder(data).subscribe(res => {
   
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { InventoryServiceService } from '../../services/inventory-service.service';
@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.css']
})
export class NewPurchaseOrderComponent implements OnInit {
  supplierData = new Array();
  supplierSelectedData=new Array();
  supplier:any={
    "supplierId":'',
    "supplierName":'',
    "paymentTerms":'',
    "supplierAddress":'',
  }
  selectDisable=true;
  constructor(private router:Router,private _location: Location,private service:InventoryServiceService) { }

  ngOnInit() {
    this.service.getSuppliers().subscribe(res => {
      this.supplierData = res["result"];
    })
  }
  backToInventory() {
    this._location.back();
  }
  orderSupplier(){
    this.router.navigate(['inventory/purchase-order-supplier']);
 
  }
  purchaseSuppliers(supplier_id:any){
    this.selectDisable=false;
    this.supplier.supplierId=supplier_id;
    this.service.getSelectedSupplier(this.supplier.supplierId).subscribe(response => {
      this.supplierSelectedData=response["result"];
      localStorage.setItem('supplierdata',JSON.stringify(this.supplierSelectedData));
    });
  }  
}

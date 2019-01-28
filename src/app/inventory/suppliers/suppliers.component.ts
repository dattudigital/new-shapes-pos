import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryServiceService } from '../../services/inventory-service.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  supplierData = new Array();
  selectedSupplierData: any = {}
  supplier: any = {
    "supplier_id": '',
    "supplier_name": '',
    "supplier_status": '',
    "supplier_contact_name": '',
    "supplier_title": '',
    "supplier_phone": "",
    "supplier_fax": "",
    "supplier_ext": "",
    "supplier_homepage": "",
    "supplier_email": "",
    "supplier_rewardpoints": '',
    "supplier_address": '',
    "supplier_city": '',
    "supplier_state": '',
    "supplier_zip": '',
    "supplier_taxrate": '',
    "supplier_paymentterms": '',
    "supplier_notes": ''
  }

  inactiveSupplier: '';
  editStyle = "hidden";
  retrievedObject: any;
  constructor(private router: Router, private service: InventoryServiceService) { }

  ngOnInit() {
    this.getAllSuppliers();
    this.retrievedObject = JSON.parse(localStorage.getItem('supplierdata'));
    if (this.retrievedObject) {
      this.editStyle = "visible";
      console.log(this.retrievedObject);
      console.log(this.retrievedObject[0].supplier_name);
      this.supplier.supplier_id = this.retrievedObject[0].supplier_id;
      this.supplier.supplier_name = this.retrievedObject[0].supplier_name;
      this.supplier.supplier_status = this.retrievedObject[0].supplier_status;
      this.supplier.supplier_address = this.retrievedObject[0].supplier_address;
      this.supplier.supplier_city = this.retrievedObject[0].supplier_city;
      this.supplier.supplier_state = this.retrievedObject[0].supplier_state;
      this.supplier.supplier_zip = this.retrievedObject[0].supplier_zip;
      this.supplier.supplier_taxrate = this.retrievedObject[0].supplier_taxrate;
      this.supplier.supplier_paymentterms = this.retrievedObject[0].supplier_paymentterms;
      this.supplier.supplier_supplier_notes = this.retrievedObject[0].supplier_notes;
      this.supplier.supplier_contact_name = this.retrievedObject[0].supplier_contact_name;
      this.supplier.supplier_title = this.retrievedObject[0].supplier_title;
      this.supplier.supplier_phone = this.retrievedObject[0].supplier_phone;
      this.supplier.supplier_ext = this.retrievedObject[0].supplier_ext;
      this.supplier.supplier_fax = this.retrievedObject[0].supplier_fax;
      this.supplier.supplier_homepage = this.retrievedObject[0].supplier_homepage;
      this.supplier.supplier_email = this.retrievedObject[0].supplier_email;
      this.supplier.supplier_rewardpoints = this.retrievedObject[0].supplier_rewardpoints;
    }
  }
  inactiveCheckbox() {
    var inactiveCheckbox
    console.log(this.inactiveSupplier);
    if (this.inactiveSupplier == undefined || !this.inactiveSupplier) {
      inactiveCheckbox = '0'
      console.log(inactiveCheckbox)
      this.service.getInactiveSupplier(inactiveCheckbox).subscribe(res => {
        this.supplierData = res["result"]
        this.supplier.supplier_id = ' ';
      })
    }
    if (this.inactiveSupplier) {
      this.getAllSuppliers();
    }
    this.editStyle = "hidden";
  }

  getAllSuppliers() {
    this.service.getSuppliers().subscribe(res => {
      this.supplierData =res["result"];
    })
  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
  newSupplier() {
    this.router.navigate(['inventory/suppliers/new-suppliers']);
  }
  setSuppliers(supplier_id: any) {
    this.supplier.supplier_id = supplier_id;
    this.service.getSelectedSupplier(this.supplier.supplier_id).subscribe(response => {
      console.log(response);
      this.selectedSupplierData = response;
      var selectedData = this.selectedSupplierData.pop();
      this.supplier.supplier_id = selectedData.supplier_id;
      this.supplier.supplier_name = selectedData.supplier_name;
      this.supplier.supplier_status = selectedData.supplier_status;
      if (this.supplier.supplier_status == '1') {
        this.supplier.supplier_status = '';
      }
      this.supplier.supplier_contact_name = selectedData.supplier_contact_name;
      this.supplier.supplier_title = selectedData.supplier_title;
      this.supplier.supplier_phone = selectedData.supplier_phone;
      this.supplier.supplier_fax = selectedData.supplier_fax;
      this.supplier.supplier_ext = selectedData.supplier_ext;
      this.supplier.supplier_homepage = selectedData.supplier_homepage;
      this.supplier.supplier_email = selectedData.supplier_email;
      this.supplier.supplier_rewardpoints = selectedData.supplier_rewardpoints;
      this.supplier.supplier_address = selectedData.supplier_address;
      this.supplier.supplier_city = selectedData.supplier_city;
      this.supplier.supplier_state = selectedData.supplier_state;
      this.supplier.supplier_zip = selectedData.supplier_zip;
      this.supplier.supplier_taxrate = selectedData.supplier_taxrate;
      this.supplier.supplier_paymentterms = selectedData.supplier_paymentterms;
      this.supplier.supplier_notes = selectedData.supplier_notes;
      this.editStyle = "visible";
    })
  }
  updateSupplier(val) {
    var inactiveCheckbox;
    console.log(val);
    console.log(val.supplier_id)
    console.log(val.supplier_status)
    if (val.supplier_status) {
      inactiveCheckbox = '0'
    } else {
      inactiveCheckbox = '1'
    }

    if (val.supplier_status == undefined) {
      inactiveCheckbox = '1'
    }
    var data = {
      supplier_id: val.supplier_id,
      supplier_name: val.supplier_name,
      supplier_status: inactiveCheckbox,
      supplier_contact_name: val.supplier_contact_name,
      supplier_title: val.supplier_title,
      supplier_phone: val.supplier_phone,
      supplier_fax: val.supplier_fax,
      supplier_ext: val.supplier_ext,
      supplier_homepage: val.supplier_homepage,
      supplier_email: val.supplier_email,
      supplier_rewardpoints: val.supplier_rewardpoints,
      supplier_address: val.supplier_address,
      supplier_city: val.supplier_city,
      supplier_state: val.supplier_state,
      supplier_zip: val.supplier_zip,
      supplier_taxrate: val.supplier_taxrate,
      supplier_paymentterms: val.supplier_paymentterms,
      supplier_notes: val.supplier_notes
    }
    console.log(data);
    this.service.saveSuppliers(data).subscribe(res => {
      console.log(res["result"])
    });
    localStorage.clear();
    this.editStyle = "hidden";
  }

}

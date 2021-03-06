import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { InventoryServiceService } from '../../services/inventory-service.service';
import { SheduleServiceService } from '../../services/shedule-service.service';
import * as moment from 'moment/moment';
@Component({
  selector: 'app-inventory-tickets',
  templateUrl: './inventory-tickets.component.html',
  styleUrls: ['./inventory-tickets.component.css']
})
export class InventoryTicketsComponent implements OnInit {
  public date1: any;
  public date2: any;
  inventoryData: any = [];
  supplierData = new Array();
  locationData = new Array();

  startDate: any;
  endDate: any;
  supplier_id: "";
  branch_id: "";
  statusId: "";

  constructor(private router: Router, private http: HttpClient, private service: InventoryServiceService, private location: SheduleServiceService) { }

  ngOnInit() {
    this.http.get(environment.host + 'inv-tkts').subscribe(res => {
      this.inventoryData = res["result"];
      console.log(this.inventoryData)
    });
    this.service.getSuppliers().subscribe(res => {
      this.supplierData = res["result"];
      this.supplier_id = '';
    });
    this.location.getAllLocations().subscribe(response => {
      this.locationData = response["result"];
    });
  }

  getStartDate() {
    let newDate = moment(this.date1).format('YYYY-MM-DD').toString();
    this.startDate = newDate;
  }

  getEndDate() {

    let newDate1 = moment(this.date2).format('YYYY-MM-DD').toString();
    this.endDate = newDate1;
  }
  filterInventory() {
    var url = '';
    if (this.startDate) {
      url = url + 'startdate=' + this.startDate;
    }
    if (this.endDate) {
      url = url + '&enddate=' + this.endDate
    }
    if (this.supplier_id) {
      url = url + '&source=' + this.supplier_id
    }
    if (this.branch_id) {
      url = url + '&destination=' + this.branch_id
    }
    this.service.getInventoryTicket(url).subscribe(res => {
  
      if (res["result"].result.status == undefined) {
        this.inventoryData = res["result"].result;
        console.log(this.inventoryData)
      } else {
        this.inventoryData = res["result"]._body;
      }
    })
  }

  inventoryReset() {
    this.http.get(environment.host + 'inv-tkts').subscribe(res => {
      this.inventoryData = res["result"];
    });
    this.startDate = "";
    this.endDate = "";
    this.supplier_id = "";
    this.branch_id = "";

  }
  backToInventory() {
    this.router.navigate(['inventory']);
  }
  newInventory() {
    this.router.navigate(['inventory/new-inventory-ticket']);
  }
}

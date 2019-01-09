import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fmyp-setup-sidebar',
  templateUrl: './setup-sidebar.component.html',
  styleUrls: ['./setup-sidebar.component.css']
})
export class SetupSidebarComponent implements OnInit {
  sidebarActiveName: any = "";

  constructor() { }

  generalClickInfo() {
    let modelClose = document.getElementById("general-tab");
    modelClose.click();
    this.sidebarActiveName = "general-setting";
    sessionStorage.setItem('setup-routing', JSON.stringify("general-setting"));
  }

  retailClickInfo() {
    let modelClose = document.getElementById("retail-tab");
    modelClose.click();
    this.sidebarActiveName = "retail-setting";
    sessionStorage.setItem('setup-routing', JSON.stringify("retail-setting"));

  }

  inventoryClickInfo() {
    let modelClose = document.getElementById("inventory-tab");
    modelClose.click();
    this.sidebarActiveName = "inventory-setting";
    sessionStorage.setItem('setup-routing', JSON.stringify("inventory-setting"));
  }

  clientClickInfo() {
    let modelClose = document.getElementById("client-tab");
    modelClose.click();
    this.sidebarActiveName = "client-setting";
    sessionStorage.setItem('setup-routing', JSON.stringify("client-setting"));
  }

  ngOnInit() {
    let sessionData = sessionStorage.getItem('setup-routing');
    console.log(sessionData)
    if (sessionData == '"general-setting"') {
      this.generalClickInfo()
    } else if (sessionData == '"retail-setting"') {
      this.retailClickInfo()
    } else if (sessionData == '"inventory-setting"') {
      this.inventoryClickInfo()
    } else if (sessionData == '"client-setting"') {
      this.clientClickInfo()
    }
  }

}

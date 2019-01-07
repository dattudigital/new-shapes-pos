import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { environment } from '../../../environments/environment';
import { Http } from '@angular/http';
import { PackagesServiceService } from '../../services/packages-service.service';
@Component({
  selector: 'app-add-packages',
  templateUrl: './add-packages.component.html',
  styleUrls: ['./add-packages.component.css']
})
export class AddPackagesComponent implements OnInit {
  packs: SelectItem[] = [];
  selectedPack: string[] = [];
  serviceData: any;
  packageName = '';
  catId = '';
  subCatId = '';
  marked = false;
  serviceId = '';

  constructor(private router: Router, private http: Http, private service: PackagesServiceService) {

  }

  ngOnInit() {
    this.http.get(environment.host + 'services').subscribe(data => {
      console.log(data.json().result);
      this.serviceData = data.json().result;
      console.log(this.serviceData.length);
      for (let i = 0; i < this.serviceData.length; i++) {
        this.packs.push({ label: this.serviceData[i].service_name, value: { service_id: this.serviceData[i].service_id, service_price: this.serviceData[i].service_price, service_name: this.serviceData[i].service_name } })
      }
    });
  }

  deleteService(index) {
    this.selectedPack.splice(index, 1);
    this.getServiceId(this.selectedPack);
  }

  getServiceId(val) {
    this.serviceId = '';
    for (let i = 0; i < val.length; i++) {
      this.serviceId = this.serviceId + val[i].service_id + " , ";
      console.log(this.serviceId);
    }
    this.serviceId = this.serviceId.substring(0, this.serviceId.length - 1);
  }

  addPackage() {
    var data = {
      sub_cat_id: 15,
      cat_id: 12,
      package_name: this.packageName,
      package_services: this.serviceId
    }
    console.log(this.packageName);
    console.log(this.serviceId);
    this.service.savePackage(data).subscribe(response => {
      console.log(response.json);
    })
  }

  backToMembership() {
    this.router.navigate(['manager']);
  }

  onChange() {
    console.log(this.selectedPack);
    this.getServiceId(this.selectedPack);
  }

}

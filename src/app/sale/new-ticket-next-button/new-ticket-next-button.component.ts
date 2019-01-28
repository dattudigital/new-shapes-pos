import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http , RequestOptions, Headers} from '@angular/http';
import { environment } from '../../../environments/environment';
import { Services } from '../../services/common-services';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
declare var $: any;

@Component({
  selector: 'app-new-ticket-next-button',
  templateUrl: './new-ticket-next-button.component.html',
  styleUrls: ['./new-ticket-next-button.component.css'],
  providers: [Services]
})

export class NewTicketNextButtonComponent implements OnInit {
  selectedValue: string;
  selectedOption: any;
  catProdMemResult: any[] = new Array();
  stylishResult: any[] = new Array();
  commonValues: any = [];

  temp: any[] = new Array();
  categories: any = [];
  memberships: any = [];
  packages: any = [];
  _service = false;
  _membership = false;
  _package = false;

  constructor(private http: Http, private router: Router, private services: Services) {}

  ngOnInit() {
  }

  onSelectStylish(event: TypeaheadMatch): void {
  }

  getServiceList() {
    console.log("******************")
    let token =  JSON.parse(localStorage.getItem('test'));
    console.log("cameeeeeeeeeee")
    let headers = new Headers({ 'x-access-token':token });
    let options = new RequestOptions({headers: headers});

    this.http.get(environment.host + 'categorys',options).subscribe(data => {
      this.categories = data.json().result;
    });
  }

  getPackageList() {
    console.log("******************")
    this.http.get(environment.host + 'packages').subscribe(data => {
      this.packages = data.json().result;
    });
  }
  
  getMembershipList() {
    console.log("******************")
    this.http.get(environment.host + 'memberships').subscribe(data => {
      this.memberships = data.json().result;
    });
  }

  onSelect(event: TypeaheadMatch): void {
    $("#selectedCategory").modal('show');
    this.selectedOption = event.item;
    if (event.item.type == "service") {
      this._service = true;
      this._membership = false;
      this._package = false;
      this.http.get(environment.host + 'services/category/' + event.item.cat_id).subscribe(data => {
        this.commonValues = data.json().result;


      });
    } else {
      var arrayConvert = []
      arrayConvert.push(event.item)
      this.commonValues = arrayConvert;
      if (event.item.membership_name) {
        this._service = false;
        this._membership = true;
        this._package = false;
      } else {
        this._service = false;
        this._membership = false;
        this._package = true;
      }
    }
  }

  checkRedirect(val) {
    if (val[0].service_name) {
      $("#serviceCategory").modal('show');
    }
  }

  commonClick(val, type) {
    let url;
    var arrayConvert = []
    if (type == 'c') {
      this._service = true;
      this._membership = false;
      this._package = false;
      url = 'services/category/' + val.cat_id;
      this.http.get(environment.host + 'services/category/' + val.cat_id).subscribe(data => {
        this.commonValues = data;
        console.log(this.commonValues);
        if (this.commonValues.status == 404) {
          this.commonValues = Array.of(val);
        }

      });
    } else {
      if (type == 'm') {
        this._service = false;
        this._membership = true;
        this._package = false;
        arrayConvert.push(val)
        this.commonValues = arrayConvert;
      } else {
        if (type == 'p') {
          this._service = false;
          this._membership = false;
          this._package = true;
          arrayConvert.push(val);
          this.commonValues = arrayConvert;
        }
      }
    }
  }

  checkTextBoxValues(val) {
    let result: any[] = new Array();
    if (Object.keys(this.commonValues).length) {
      if (val == 's') {
        for (let i = 0; i < this.commonValues.length; i++) {
          if (this.commonValues[i].selectedVal) {
            this.commonValues[i].selectedVal = Number(this.commonValues[i].selectedVal);
            this.commonValues[i].service_price = Number(this.commonValues[i].service_price);
            this.commonValues[i].service_price = this.commonValues[i].service_price * this.commonValues[i].selectedVal;
            result.push({ name: this.commonValues[i].service_name, price: this.commonValues[i].service_price, count: this.commonValues[i].selectedVal });
          }
        }
      } else {
        if (val == 'm') {
          for (let i = 0; i < this.commonValues.length; i++) {
            if (this.commonValues[i].selectedVal) {
              this.commonValues[i].selectedVal = Number(this.commonValues[i].selectedVal);
              this.commonValues[i].membership_price = Number(this.commonValues[i].membership_price);
              this.commonValues[i].membership_price = this.commonValues[i].membership_price * this.commonValues[i].selectedVal;
              result.push({ name: this.commonValues[i].membership_name, price: this.commonValues[i].membership_price, count: this.commonValues[i].selectedVal });
            }
          }
        } else {
          if (val == 'p') {
            for (let i = 0; i < this.commonValues.length; i++) {
              if (this.commonValues[i].selectedVal) {
                this.commonValues[i].selectedVal = Number(this.commonValues[i].selectedVal);
                this.commonValues[i].package_price = Number(this.commonValues[i].package_price);
                this.commonValues[i].package_price = this.commonValues[i].package_price * this.commonValues[i].selectedVal;
                result.push({ name: this.commonValues[i].package_name, price: this.commonValues[i].package_price, count: this.commonValues[i].selectedVal });
              }
            }
          }
        }
      }
    }
    sessionStorage.setItem('selectedServices', JSON.stringify(result));
    this.services.setcategoryValue(result);
  }

  catProdMemSearch(val) {
    if (val.length >= 3) {
      this.http.get(environment.host + 'sales/cat-mem-product/' + val).subscribe(data => {
        this.temp.push(data.json().result);
        this.catProdMemResult = this.temp[0];
      });
    }
  }

  stylishSearch(val) {
    if (val.length >= 3) {
      this.http.get(environment.host + 'sales/stylist/' + val).subscribe(data => {
        this.temp.push(data.json().result);
        this.stylishResult = this.temp[0];
      });
    }
  }

}
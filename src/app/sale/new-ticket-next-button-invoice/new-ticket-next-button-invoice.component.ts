import { Component, OnInit } from '@angular/core';
import { Services } from '../../services/common-services';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as _ from 'lodash';
import { Router} from '@angular/router'

@Component({
  selector: 'app-new-ticket-next-button-invoice',
  templateUrl: './new-ticket-next-button-invoice.component.html',
  styleUrls: ['./new-ticket-next-button-invoice.component.css'],
  providers:[Services]
})

export class NewTicketNextButtonInvoiceComponent implements OnInit {
  p: number = 1;
  common;
  titleName = '';
  temp: any[] = new Array();
  public edited = true;
  selectResult;
  commonValues;
  _subTypeOfService;
  servicesColor='#e4e9ef';
  servicetextColor='#000';
  productsColor='#e4e9ef';
  producttextColor='#000'
  packagesColor='#e4e9ef';
  packagetextColor='#000'
  memberColor='#e4e9ef';
  memtextColor='#000';
  giftcardColor='#e4e9ef';
  gifttextColor='#000';
  discountsColor='#e4e9ef';
  discounttextColor='#000';
  promotionsColor='#e4e9ef';
  promotionstextColor='#000';
  refundColor='#e4e9ef';
  refundtextColor='#000';


  constructor(private services: Services, private http: HttpClient,private router:Router ) {
    this.selectResult = JSON.parse(sessionStorage.getItem('selectedServices'));
    this.titleName = 'Service';
    this.http.get(environment.host + 'categorys').subscribe(data => {
      this.common = data["result"];
    });
    this.subTotal();
  }
colorEnable(){
 this.servicesColor='#e4e9ef';
  this.productsColor='#e4e9ef';
  this.packagesColor='#e4e9ef';
 this.memberColor='#e4e9ef';
  this.giftcardColor='#e4e9ef';
  this.discountsColor='#e4e9ef';
  this.promotionsColor='#e4e9ef';
 this.refundColor='#e4e9ef';
}
textColorEnable(){
  this.servicetextColor='#000';
  this.producttextColor='#000';
  this.packagetextColor='#000';
  this.memtextColor='#000';
  this.gifttextColor='#000'
  this.discounttextColor='#000'
  this.promotionstextColor='#000'
  this.refundtextColor='#000'
}
  showTable(val) {
    this.edited = !this.edited;
    if (val.product_name) {
      this.commonValues = Array.of(val);
    } else if (val.package_name) {
      this.commonValues = Array.of(val);
    } else if (val.promotion_name) {
      this.commonValues = Array.of(val);
    } else if (val.giftcard_name) {
      this.commonValues = Array.of(val);
    } else if (val.membership_name) {
      this.commonValues = Array.of(val);
    } else if (_.size(val) && val.category_name) {
      this.http.get(environment.host + 'services/category/' + val.cat_id).subscribe(data => {
        this.commonValues = Array.of(val);
      });
    }
  }

  addToBilling(_name, _price, _count) {
    var arr = [];
    if (_count) {
      _count = Number(_count);
      _price = Number(_price);
      _price = _price * _count;
      arr.push({
        name: _name,
        price: _price,
        count: _count
      })
      let _sessionVal = JSON.parse(sessionStorage.getItem('selectedServices'));
      let _final = _.concat(_sessionVal, arr);
      sessionStorage.setItem('selectedServices', JSON.stringify(_final));
      this.selectResult = _final;
    }
    this.subTotal();
  }

  serviceClick(){
    this.textColorEnable();
    this.colorEnable();
    this.servicesColor='#345465';
    this.servicetextColor='#fff';
    this.titleName = 'Service';
    this.edited = true;
    this.http.get(environment.host + 'categorys').subscribe(data => {
      this.common = data["result"];
    });
  }
  productClick() {
    this.textColorEnable();
    this.colorEnable();
    this.productsColor='#345465';
    this.producttextColor='#fff';
    this.titleName = 'Product';
    this.edited = true;
    this.http.get(environment.host + 'products').subscribe(data => {
      this.common = data["result"];
    });
  }

  packagesClick() {
    this.textColorEnable();
    this.colorEnable();
    this.packagesColor='#345465';
    this.packagetextColor='#fff';
    this.titleName = 'Package';
    this.edited = true;
    this.http.get(environment.host + 'packages').subscribe(data => {
      this.common = data["result"];
    });
  }

  membershipClick() {
    this.textColorEnable();
    this.colorEnable();
    this.memberColor='#345465';
    this.memtextColor='#fff';
    this.titleName = 'Membership';
    this.edited = true;
    this.http.get(environment.host + 'memberships').subscribe(data => {
      this.common = data["result"];
    });
  }

  promotionsClick() {
    this.textColorEnable();
    this.colorEnable();
    this.promotionsColor='#345465';
    this.promotionstextColor='#fff';
    this.titleName = 'Promotions';
    this.edited = true;
    this.http.get(environment.host + 'promotions').subscribe(data => {
      this.common = data["result"];
    });
  }

  giftcardClick() {
    this.textColorEnable();
    this.colorEnable();
    this.giftcardColor='#345465';
   
    this.gifttextColor='#fff';
    this.titleName = 'GiftCards';
    this.edited = true;
    this.http.get(environment.host + 'giftcards').subscribe(data => {
      this.common = data["result"];
    });
  }

  ngOnInit() {

  }

  display;

  subTotal() {
    let total: number = 0;
    let billData = JSON.parse(sessionStorage.getItem('selectedServices'));
    if(billData){
      for (let i = 0; i < billData.length; i++) {
        total = total + billData[i].price;
        this.display = total;
      }
    }    
  }

  removeItem(val, index) {
    let _sessionVal = JSON.parse(sessionStorage.getItem('selectedServices'));
    _sessionVal.splice(index, 1);
    sessionStorage.setItem('selectedServices', JSON.stringify(_sessionVal));
    this.selectResult = _sessionVal;
    this.subTotal();
  }

  redirectToInvoicePayment(){
     this.router.navigate(['sale/new-ticket-next-button-invoice-payment']);
  }
}

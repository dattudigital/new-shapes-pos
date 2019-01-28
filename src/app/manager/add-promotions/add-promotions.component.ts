import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AddPromotionServiceService } from '../../services/add-promotion-service.service'
import * as moment from 'moment';
import { WeekdaysPipe } from '../../pipe/weekdays.pipe'
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-add-promotions',
  templateUrl: './add-promotions.component.html',
  styleUrls: ['./add-promotions.component.css']
})
export class AddPromotionsComponent implements OnInit {
  msgs: Message[] = [];

  promotionName = "";
  promotionCode = "";
  discountAmount = "";
  promotionValidity = "";
  promotionServices: "";
  promotionOnOtherService: "";
  promotionActivationDate = "";
  promotionExpirationDate = "";
  promotionDiscountDays = "";
  promotionMaxUsers = "";
  promotionItemTypes = "";
  allowOnlineSales = "";

  validDays = '';
  sunday = '';
  monday = '';
  tuesday = '';
  wednesday = '';
  thursday = '';
  friday = '';
  saturday = '';

  public date1: any;
  public date2: any;
  locationData = new Array();

  submitted = false;

  constructor(private router: Router, private messageService: MessageService, private service: AddPromotionServiceService) { }

  ngOnInit() {
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Promotions added Successfully' });
  }
  addPromotion() {
    this.submitted = true;
    let allowonlinecheckbox = '';
    let totaldays = '';
    console.log(this.allowOnlineSales);
    if (this.allowOnlineSales.toString() == 'true') {
      allowonlinecheckbox = '1'
    } else {
      allowonlinecheckbox = '0'
    }
    console.log(allowonlinecheckbox);
    if (this.sunday.toString() == 'true') { totaldays = totaldays + ' 0 ,' }
    if (this.monday.toString() == 'true') { totaldays = totaldays + ' 1 ,' }
    if (this.tuesday.toString() == 'true') { totaldays = totaldays + ' 2 ,' }
    if (this.wednesday.toString() == 'true') { totaldays = totaldays + ' 3 ,' }
    if (this.thursday.toString() == 'true') { totaldays = totaldays + ' 4 ,' }
    if (this.friday.toString() == 'true') { totaldays = totaldays + ' 5 ,' }
    if (this.saturday.toString() == 'true') { totaldays = totaldays + ' 6 ,' }
    totaldays = totaldays.substring(0, totaldays.length - 1);


    var data = {
      promotion_name: this.promotionName,
      promotion_code: this.promotionCode,
      promotion_price: this.discountAmount,
      promotion_discount_type: this.promotionDiscountDays,
      promotion_max_users: this.promotionMaxUsers,
      promotion_allow_online_sale: allowonlinecheckbox,
      promotion_item_types: this.promotionItemTypes,
      promotion_valid_days: totaldays,
      promotion_services: this.promotionServices,
      promotion_on_other_services: this.promotionOnOtherService,
      promotion_start_date: this.promotionActivationDate,
      promotion_end_date: this.promotionExpirationDate,
    }
    this.service.addPromotionPost(data).subscribe(response => {
      

    });
  }

  getActivationDate() {
    let newDate = moment(this.promotionActivationDate).format('YYYY-MM-DD').toString();
    this.promotionActivationDate = newDate;
    console.log(this.promotionActivationDate);
  }

  getExpirationDate() {
    let newDate1 = moment(this.promotionExpirationDate).format('YYYY-MM-DD').toString();
    this.promotionExpirationDate = newDate1;
    console.log(this.promotionExpirationDate);
  }

  backToMembership() {
    this.router.navigate(['manager']);
  }
}

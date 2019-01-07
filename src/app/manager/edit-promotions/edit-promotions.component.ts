import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as moment from 'moment';
import { AddPromotionServiceService } from '../../services/add-promotion-service.service'
import { WeekdaysPipe } from '../../pipe/weekdays.pipe'
declare var $: any;
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-edit-promotions',
  templateUrl: './edit-promotions.component.html',
  styleUrls: ['./edit-promotions.component.css']
})
export class EditPromotionsComponent implements OnInit {
  msgs: Message[] = [];
  localData: any = [];
  editData: any = []
  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  newDate: any;
  newDate2: any;
  locationData = new Array();

  submitted = false;

  constructor(private router: Router, private messageService: MessageService, private service: AddPromotionServiceService) { }

  ngOnInit() {
    this.editPromotionGet();
  }

  backToPromotion() {
    this.router.navigate(['manager']);
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Promotions updated Successfully' });
  }

  editPromotionGet() {
    this.service.editPromotionGet().subscribe(localData => {
      this.localData = localData.json().result;

    })
  }

  editPromotion(data, index) {
    data.index = index;
    this.editData = data;

    let newDate = moment(this.editData.promotion_start_date).format('YYYY-MM-DD').toString();
    this.editData.promotion_start_date = newDate;

    let newDate1 = moment(this.editData.promotion_end_date).format('YYYY-MM-DD').toString();
    this.editData.promotion_end_date = newDate1;

    console.log(this.editData.promotion_allow_online_sale);
    if (this.editData.promotion_allow_online_sale == '0') {
      this.editData.promotion_allow_online_sale = '';
    }

    if (this.editData.promotion_valid_days.includes('0')) {
      this.sunday = true;
    }
    else {
      this.sunday = false
    }
    if (this.editData.promotion_valid_days.includes('1')) {
      this.monday = true
    }
    else {
      this.monday = false
    }
    if (this.editData.promotion_valid_days.includes('2')) {
      this.tuesday = true
    }
    else {
      this.tuesday = false
    }
    if (this.editData.promotion_valid_days.includes('3')) {
      this.wednesday = true
    }
    else {
      this.wednesday = false
    }
    if (this.editData.promotion_valid_days.includes('4')) {
      this.thursday = true
    }
    else {
      this.thursday = false
    }
    if (this.editData.promotion_valid_days.includes('5')) {
      this.friday = true
    }
    else {
      this.friday = false
    }
    if (this.editData.promotion_valid_days.includes('6')) {
      this.saturday = true
    }
    else {
      this.saturday = false
    }
    sessionStorage.setItem('commonData', JSON.stringify(this.editData));

  }
  cancelPromotions(val) {
    let tableRowData = JSON.parse(sessionStorage.getItem('commonData'));
    this.localData[tableRowData.index] = tableRowData;
    window.sessionStorage.removeItem('commonData');
  }
  updatePromotion(val) {
    this.submitted = true;
    console.log(val)
    let allowonlinecheckbox = '';
    if (this.editData.promotion_allow_online_sale.toString() == 'false') {
      allowonlinecheckbox = '0'
    }
    else {
      allowonlinecheckbox = '1'
    }

    let totaldays = '';
    if (this.sunday.toString() == 'true') { totaldays = totaldays + ' 0 ,' }
    if (this.monday.toString() == 'true') { totaldays = totaldays + ' 1 ,' }
    if (this.tuesday.toString() == 'true') { totaldays = totaldays + ' 2 ,' }
    if (this.wednesday.toString() == 'true') { totaldays = totaldays + ' 3 ,' }
    if (this.thursday.toString() == 'true') { totaldays = totaldays + ' 4 ,' }
    if (this.friday.toString() == 'true') { totaldays = totaldays + ' 5 ,' }
    if (this.saturday.toString() == 'true') { totaldays = totaldays + ' 6 ,' }
    totaldays = totaldays.substring(0, totaldays.length - 1);

    var data = {
      promotion_id: val.promotion_id,
      promotion_name: val.promotion_name,
      promotion_code: val.promotion_code,
      promotion_price: val.promotion_price,
      promotion_discount_type: val.promotion_discount_type,
      // promotion_start_date:val.promotion_start_date,
      // promotion_end_date:val.promotion_end_date,
      promotion_valid_days: totaldays,
      promotion_max_users: val.promotion_max_users,
      promotion_allow_online_sale: allowonlinecheckbox,
      promotion_item_types: val.promotion_item_types
    }
    this.service.addPromotionPost(data).subscribe(response => {
      val.promotion_valid_days = response.json().promotion_valid_days;
    })
    $("#add-promotion").modal('hide');
  }
  getActivationDate() {
    let newDate = moment(this.editData.promotion_start_date).format('YYYY-MM-DD').toString();
    this.editData.promotion_start_date = newDate;
  }

  getExpirationDate() {
    let newDate1 = moment(this.editData.promotion_end_date).format('YYYY-MM-DD').toString();
    this.editData.promotion_end_date = newDate1;
  }
}

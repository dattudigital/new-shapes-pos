import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment/moment';

@Component({
  selector: 'dates-filter',
  templateUrl: './dates-filter.component.html',
  styleUrls: ['./dates-filter.component.css']
})
export class DatesFilterComponent implements OnInit {

  filter: any = {
    'startdate': '',
    'enddate': ''
  }
  public startDate: any;
  public endDate: any;

  message: string = "Hola Mundo!"
  @Output() messageEvent = new EventEmitter();
  constructor() {
    console.log("********************")
  }

  ngOnInit() {
  }
  getStartDate() {
    let newDate = moment(this.startDate).format('YYYY-MM-DD').toString();
    this.filter.startdate = newDate;
  }
  getEndDate() {
    let newDate1 = moment(this.endDate).format('YYYY-MM-DD').toString();
    this.filter.enddate = newDate1;
  }

  sendMessageToParent() {
    this.messageEvent.emit(this.filter)
  }

}

import { Component, OnInit } from '@angular/core';
import { NewsEventsServiceService } from '../../services/news-events-service.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {Router} from '@angular/router';
@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css']
})
export class NewsEventsComponent implements OnInit {
  public date1: any;
  public date2: any;
  messageData: any = [];
  eventsForm: FormGroup;
  newsAndEventData: any = {
    'event_name': '',
    'event_desc': '',
    'event_link': '',
    'event_startdate': '',
    'event_enddate': '',
    'event_status': ''
  }
  submitted = false


  constructor(private service: NewsEventsServiceService,private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.service.getTopMessage().subscribe(response => {
      if (response.json().status == true) {
        this.messageData = response.json().result;
      }
    });

    this.eventsForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      eventLink: ['', Validators.required],
      StartDate: ['', Validators.required],
      EndDate: ['', Validators.required],
    });
  }

  updateNewsAndEventsMessage() {
    var data = {
      top_msg_id: this.messageData.top_msg_id,
      top_msg: this.messageData.top_msg,
      topmsg_status: this.messageData.topmsg_status
    }
    this.service.editTopMessage(data).subscribe(response => {
    });
  }

  getEventStartDate() {
    let newDate = moment(this.date1).format('YYYY-MM-DD').toString();
    this.newsAndEventData.event_startdate = newDate;

  }

  getEventEndDate() {
    let newDate1 = moment(this.date2).format('YYYY-MM-DD').toString();
    this.newsAndEventData.event_enddate = newDate1;
  }

  get f() { return this.eventsForm.controls; }


  addEventAndNews() {
    this.submitted = true;
    if (this.eventsForm.invalid) {
      return;
    }
    var data = {
      event_name: this.newsAndEventData.event_name,
      event_desc: this.newsAndEventData.event_desc,
      event_link: this.newsAndEventData.event_link,
      event_startdate: this.newsAndEventData.event_startdate,
      event_enddate: this.newsAndEventData.event_enddate,
      event_topname: this.messageData.top_msg,
      event_status: 1
    }
    this.service.newsEventPost(data).subscribe(response => {
    });
  }
  backToManager(){
    this.router.navigate(['manager/side-bar'])
  }

}

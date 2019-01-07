import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NewsEventsServiceService } from '../../services/news-events-service.service'
import * as moment from 'moment';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-news-events',
  templateUrl: './news-events.component.html',
  styleUrls: ['./news-events.component.css']
})
export class NewsEventsComponent implements OnInit {
  msgs: Message[] = [];

  eventTopMessage = "";
  eventName = "";
  eventDescription = "";
  eventLink = "";
  eventStartDate = "";
  eventEndDate = "";
  public date1: any;
  public date2: any;
  locationData = new Array();
  messageData: any = [];

  submitted = false;

  constructor(private router: Router, private service: NewsEventsServiceService,private messageService: MessageService) { }

  ngOnInit() {
    this.service.getTopMessage().subscribe(response => {
      this.messageData = response.json().result;
    })
  }
 showSuccess() {
  this.msgs = [];
    this.msgs.push({severity:'success', summary:'Events Added Successfully'});
}
updateSuccess(){
  this.msgs = [];
  this.msgs.push({severity:'success', summary:'Top Message Added Successfully'});
}
  addEventNews() {
    this.submitted=true;
    var data = {
      event_topname: this.eventTopMessage,
      event_name: this.eventName,
      event_desc: this.eventDescription,
      event_link: this.eventLink,
      event_startdate: this.eventStartDate,
      event_enddate: this.eventEndDate
    }
    
    this.service.newsEventPost(data).subscribe(response => {
      this.locationData = response.json().result;
      this.eventTopMessage = '';
      this.eventName = '';
      this.eventDescription = '';
      this.eventLink = '';
      this.eventStartDate = '';
      this.eventEndDate = '';
    });
  }

  getEventStartDate() {
    let newDate = moment(this.eventStartDate).format('YYYY-MM-DD').toString();
    this.eventStartDate = newDate;
  }

  getEventEndDate() {
    let newDate1 = moment(this.eventEndDate).format('YYYY-MM-DD').toString();
    this.eventEndDate = newDate1;
  }

  backToMembership() {
    this.router.navigate(['manager']);
  }

  updateMessage(val) {
    var data = {
      top_msg_id: val.top_msg_id,
      top_msg: val.top_msg
    }
    this.service.editTopMessage(data).subscribe(response => {
    })
  }
}

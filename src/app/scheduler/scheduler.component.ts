import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-scheduler',
    templateUrl: './scheduler.component.html'
})

export class SchedulerComponent implements OnInit {
    shedule: any = {
        'startdate': '',
        'enddate': '',
        'branch_id': '',
        'employee_id': '',
        'employee_firstname': ''
      }
    public date1: any;

    constructor() { }

    ngOnInit() {

    }
}
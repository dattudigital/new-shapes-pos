import { Component, OnInit } from '@angular/core';
import { SheduleServiceService } from '../../services/shedule-service.service';
import { Http } from '@angular/http';
import * as moment from 'moment/moment';
declare var jsPDF: any;
import { ExcelService } from '../../services/excel.service';

@Component({
  selector: 'fmyp-appt-scheduler',
  templateUrl: './appt-scheduler.component.html',
  styleUrls: ['./appt-scheduler.component.css']
})
export class ApptSchedulerComponent implements OnInit {
  schedule: any = {
    'startdate': '',
    'enddate': '',
    'branch_id': '',
    'employee_id': ''
}
public date1: any;
public date2: any;
empData: any = [];
locationData: any = [];
appointmentsData: any = [];
cols: any = [];

constructor(private service: SheduleServiceService, private excelService: ExcelService, private http: Http) { }

ngOnInit() {
    this.service.getEmployee().subscribe(response => {
        if (response.json().status == true) {
            this.empData = response.json().result;
            console.log(this.empData)
        } else {
            this.empData = [];
        }
    });

    this.service.getAllLocations().subscribe(response => {
        if (response.json().status == true) {
            this.locationData = response.json().result;
        } else {
            this.locationData = [];
        }
    });

    this.cols = [
        { field: 'apptdate', header: 'Order Date' },
        { field: 'starttime', header: 'Start Time' },
        { field: 'endtime', header: 'End Time' },
        { field: 'branch_name', header: 'Location' }
    ];
}

getStartDate() {
    let newDate = moment(this.date1).format('YYYY-MM-DD').toString();
    this.schedule.startdate = newDate;
}
getEndDate() {
    let newDate1 = moment(this.date2).format('YYYY-MM-DD').toString();
    this.schedule.enddate = newDate1;
}

setemp() {
    console.log(this.schedule.employee_id)
}

getShedule() {
    var url = '';
    if (this.schedule.startdate) {
        url = url + 'startdate=' + this.schedule.startdate;
    }
    if (this.schedule.enddate) {
        url = url + '&enddate=' + this.schedule.enddate;
    }
    if (this.schedule.employee_id) {
        url = url + '&emp_id=' + this.schedule.employee_id
    }
    if (this.schedule.branch_id) {
        url = url + '&branchid=' + this.schedule.branch_id
    }
    console.log(url)
    this.service.getEmpAppointments(url).subscribe(response => {
        if (response.json().status == true) {
            this.appointmentsData = response.json().result;
            console.log(this.appointmentsData)
        }
    });
}
pdfDownload() {
    var columns = [
        { title: "Day", dataKey: "apptdate" },
        { title: "Start Time", dataKey: "starttime" },
        { title: "End Time", dataKey: "endtime" },
        { title: "Location", dataKey: "branch_name" }

    ];

    var rows = this.appointmentsData;
    var doc = new jsPDF('');
    doc.autoTable(columns, rows, {
        styles: { fillColor: [100, 255, 255] },
        columnStyles: {
            id: { fillColor: [255, 0, 0] }
        },
        margin: { top: 50 },
        addPageContent: function () {
            doc.text("Appointments", 30, 30);
        }
    });
    doc.save('Shedule.pdf');
}
xlDownload() {
    this.excelService.exportAsExcelFile(this.appointmentsData, 'Satff Activities');
}

}

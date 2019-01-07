import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-staff-schedule-view',
  templateUrl: './staff-schedule-view.component.html',
  styleUrls: ['./staff-schedule-view.component.css']
})
export class StaffScheduleViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToMembership(){
    this.router.navigate(['manager']);
  }

}

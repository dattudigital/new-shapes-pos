import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-staff-schedule-add',
  templateUrl: './staff-schedule-add.component.html',
  styleUrls: ['./staff-schedule-add.component.css']
})
export class StaffScheduleAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToMembership(){
    this.router.navigate(['manager']);
  }

}

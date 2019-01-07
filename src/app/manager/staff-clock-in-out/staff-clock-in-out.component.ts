import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-staff-clock-in-out',
  templateUrl: './staff-clock-in-out.component.html',
  styleUrls: ['./staff-clock-in-out.component.css']
})
export class StaffClockInOutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToMembership(){
    this.router.navigate(['manager']);
  }

}

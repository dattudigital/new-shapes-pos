import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-staff-vieworedit-timeclock',
  templateUrl: './staff-vieworedit-timeclock.component.html',
  styleUrls: ['./staff-vieworedit-timeclock.component.css']
})
export class StaffVieworeditTimeclockComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToMembership(){
    this.router.navigate(['manager']);
  }
}
